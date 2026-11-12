import EventCard from "./EventCard";

export default function EventList({ title, events, onBook }) {
  return <section className="section">
    <p className="tag">DISCOVER EXPERIENCES</p><h2>{title}</h2>
    {events.length ? <div className="cards">
      {events.map(event => <EventCard key={event.id} event={event} onBook={onBook} />)}
    </div> : <p className="muted">No experiences found.</p>}
  </section>;
}