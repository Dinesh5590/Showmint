import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AppContext = createContext(null);
const read = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};

export function AppProvider({ children }) {
  const [events, setEvents] = useState(() => read("showmintEvents", starterEvents));
  const [users, setUsers] = useState(() => read("showmintUsers", [
    { name: "Admin", mobile: "9999999999", email: "admin@showmint.com", pass: "admin123", role: "admin" },
    { name: "Demo User", mobile: "8888888888", email: "user@showmint.com", pass: "user123", role: "user" }
  ]));
  const [currentUser, setCurrentUser] = useState(() => read("showmintCurrentUser", null));
  const [bookings, setBookings] = useState(() => read("showmintBookings", []));
  const [bookedSeats, setBookedSeats] = useState(() => read("showmintBookedSeats", {}));
  const [location, setLocation] = useState(() => localStorage.getItem("showmintLocation") || "");

  useEffect(() => localStorage.setItem("showmintEvents", JSON.stringify(events)), [events]);
  useEffect(() => localStorage.setItem("showmintUsers", JSON.stringify(users)), [users]);
  useEffect(() => {
    if (currentUser) localStorage.setItem("showmintCurrentUser", JSON.stringify(currentUser));
    else localStorage.removeItem("showmintCurrentUser");
  }, [currentUser]);
  useEffect(() => localStorage.setItem("showmintBookings", JSON.stringify(bookings)), [bookings]);
  useEffect(() => localStorage.setItem("showmintBookedSeats", JSON.stringify(bookedSeats)), [bookedSeats]);
  useEffect(() => {
    if (location) localStorage.setItem("showmintLocation", location);
    else localStorage.removeItem("showmintLocation");
  }, [location]);

  const value = useMemo(() => ({
    events, setEvents, users, setUsers, currentUser, setCurrentUser,
    bookings, setBookings, bookedSeats, setBookedSeats, location, setLocation
  }), [events, users, currentUser, bookings, bookedSeats, location]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used inside AppProvider");
  return context;
}

const starterEvents = [
  { id: "m1", name: "Avatar: Fire and Ash", type: "Movie", date: "Today, 7:30 PM", venue: "PVR Cinemas", price: 220, rating: "8.7", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80" },
  { id: "m2", name: "The Last Journey", type: "Movie", date: "Tomorrow, 6:00 PM", venue: "INOX", price: 180, rating: "8.2", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=80" },
  { id: "m3", name: "Midnight Story", type: "Movie", date: "Today, 9:00 PM", venue: "Cinepolis", price: 200, rating: "8.5", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=80" },
  { id: "m4", name: "Dune: Part Three", type: "Movie", date: "Tomorrow, 8:30 PM", venue: "AMB Cinemas", price: 250, rating: "8.9", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=700&q=80" },
  { id: "c1", name: "Sunburn Arena", type: "Concert", date: "18 Dec 2026", venue: "Gachibowli Stadium", price: 1499, rating: "4.9", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=700&q=80" },
  { id: "c2", name: "Arijit Singh Live", type: "Concert", date: "25 Dec 2026", venue: "Bengaluru Palace", price: 1999, rating: "4.8", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=700&q=80" },
  { id: "c3", name: "Indie Music Fest", type: "Concert", date: "8 Jan 2027", venue: "Phoenix Arena", price: 999, rating: "4.6", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=700&q=80" },
  { id: "e1", name: "Comedy Night Live", type: "Event", date: "5 Dec 2026", venue: "Shilpakala Vedika", price: 599, rating: "4.8", image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=700&q=80" },
  { id: "e2", name: "Tech Expo 2026", type: "Event", date: "15 Dec 2026", venue: "HITEX", price: 299, rating: "4.6", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=80" },
  { id: "e3", name: "Gaming Championship", type: "Event", date: "4 Jan 2027", venue: "Cyber Arena", price: 499, rating: "4.7", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=700&q=80" }
];