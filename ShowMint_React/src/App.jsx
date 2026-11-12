import { useMemo, useState } from "react";
import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import Header from "./components/Header";
import EventList from "./components/EventList";
import AuthModal from "./components/AuthModal";
import LocationModal from "./components/LocationModal";
import BookingModal from "./components/BookingModal";
import TicketModal from "./components/TicketModal";
import Admin from "./pages/Admin";
import { useApp } from "./state/AppContext";

export default function App() {
  const { events, currentUser, location, bookings, setBookings } = useApp();
  const [authOpen, setAuthOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [ticket, setTicket] = useState(null);
  const navigate = useNavigate();
  const book = event => {
    if (!currentUser) { setAuthOpen(true); return; }
    if (!location) { setLocationOpen(true); return; }
    setSelectedEvent(event);
  };
  const confirm = item => { setBookings(old => [...old, item]); setSelectedEvent(null); setTicket(item); };
  return <>
    <Header onAuth={() => setAuthOpen(true)} onLocation={() => setLocationOpen(true)} />
    <Routes>
      <Route path="/" element={<Home events={events} onBook={book} onSearch={q => navigate(`/search/${encodeURIComponent(q)}`)} />} />
      <Route path="/movies" element={<EventList title="Movies" events={events.filter(e => e.type === "Movie")} onBook={book} />} />
      <Route path="/concerts" element={<EventList title="Concerts" events={events.filter(e => e.type === "Concert")} onBook={book} />} />
      <Route path="/events" element={<EventList title="Events" events={events.filter(e => e.type === "Event")} onBook={book} />} />
      <Route path="/search/:query" element={<SearchPage events={events} onBook={book} />} />
      <Route path="/bookings" element={currentUser?.role === "user" ? <Bookings bookings={bookings.filter(b => b.email === (currentUser.email || ""))} onView={setTicket} /> : <Navigate to="/" />} />
      <Route path="/admin" element={currentUser?.role === "admin" ? <Admin /> : <Navigate to="/" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <footer><div className="logo">Show<span>Mint</span></div><p>React · Components · Hooks · Context API · React Router</p></footer>
    {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
    {locationOpen && <LocationModal onClose={() => setLocationOpen(false)} />}
    {selectedEvent && <BookingModal event={selectedEvent} onClose={() => setSelectedEvent(null)} onConfirmed={confirm} />}
    {ticket && <TicketModal ticket={ticket} onClose={() => setTicket(null)} />}
  </>;
}

function Home({ events, onBook, onSearch }) {
  const [query, setQuery] = useState("");
  const popular = useMemo(() => events.slice(0, 4), [events]);
  return <>
    <section className="hero"><div><p className="tag">YOUR PASS TO EVERY EXPERIENCE</p><h1>Book Your<br /><span>Next Experience.</span></h1><p>Movies, concerts and events — all in one place.</p>
      <form className="search" onSubmit={e => {e.preventDefault(); if(query.trim()) onSearch(query.trim());}}><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search movies, concerts, events..." /><button>Search</button></form>
    </div></section>
    <div className="categories"><a href="/movies">🎬<b>Movies</b></a><a href="/concerts">🎤<b>Concerts</b></a><a href="/events">🎪<b>Events</b></a></div>
    <EventList title="Popular Experiences" events={popular} onBook={onBook} />
  </>;
}

function SearchPage({ events, onBook }) {
  const { query = "" } = useParams();
  const results = events.filter(e => `${e.name} ${e.type} ${e.venue}`.toLowerCase().includes(decodeURIComponent(query).toLowerCase()));
  return <EventList title={`Search results for "${decodeURIComponent(query)}"`} events={results} onBook={onBook} />;
}

function Bookings({ bookings, onView }) {
  return <section className="section"><p className="tag">USER MODULE</p><h2>My Bookings</h2>
    {bookings.length ? bookings.map(b => <article className="booking-item" key={b.id}><h3>{b.name}</h3><p>📅 {b.date} · 📍 {b.venue} · {b.location}</p><p>Seats: {b.seats.join(", ")} · Amount: ₹{b.total}</p><p className="muted">Ticket ID: {b.id} · {b.paymentStatus}</p><button className="secondary" onClick={() => onView(b)}>View / Download Ticket</button></article>) : <p className="muted">No bookings yet. Book your first experience!</p>}
  </section>;
}