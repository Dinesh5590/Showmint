export default function EventCard({ event, onBook }) {
  return <article className="card">
    <img src={event.image} alt={event.name} />
    <div className="card-content">
      <h3>{event.name}</h3>
      <p>{event.type} · ⭐ {event.rating || "New"}</p>
      <p>📅 {event.date}</p><p>📍 {event.venue}</p>
      <div className="card-bottom"><strong>₹{event.price}</strong><button onClick={() => onBook(event)}>Book</button></div>
    </div>
  </article>;
}