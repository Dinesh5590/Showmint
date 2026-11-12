import { useMemo, useState } from "react";
import { useApp } from "../state/AppContext";

const emptyForm = { name: "", type: "Movie", venue: "", date: "", price: "", image: "" };

export default function Admin() {
  const { events, setEvents, users, bookings } = useApp();
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const revenue = useMemo(() => bookings.reduce((sum, b) => sum + Number(b.total || 0), 0), [bookings]);
  const updateField = e => setForm(old => ({ ...old, [e.target.name]: e.target.value }));

  function saveEvent(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.venue.trim() || !form.date.trim() || Number(form.price) <= 0) {
      setMessage("Please complete all required fields and enter a valid price."); return;
    }
    if (editingId) {
      setEvents(old => old.map(item => item.id === editingId ? { ...item, ...form, price: Number(form.price) } : item));
      setMessage("Event updated successfully.");
    } else {
      setEvents(old => [...old, { ...form, id: `event-${Date.now()}`, price: Number(form.price), rating: "New", image: form.image || "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=700&q=80" }]);
      setMessage("Event added successfully.");
    }
    setForm(emptyForm); setEditingId(null);
  }
  function edit(item) {
    setEditingId(item.id); setForm({ name: item.name, type: item.type, venue: item.venue, date: item.date, price: String(item.price), image: item.image || "" });
    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function remove(id) {
    if (window.confirm("Delete this event?")) setEvents(old => old.filter(item => item.id !== id));
  }

  return <section className="section">
    <div className="admin-heading"><div><p className="tag">ADMIN MODULE</p><h2>Dashboard</h2></div><span className="admin-badge">Administrator</span></div>
    <div className="stats"><Stat label="Total Events" value={events.length} /><Stat label="Registered Users" value={users.length} /><Stat label="Total Bookings" value={bookings.length} /><Stat label="Revenue (demo)" value={`₹${revenue}`} /></div>
    <div className="admin-grid">
      <form className="panel" onSubmit={saveEvent}>
        <h3>{editingId ? "Update Event" : "Add New Event"}</h3>
        <label>Event Name</label><input name="name" value={form.name} onChange={updateField} placeholder="Event name" />
        <label>Category</label><select name="type" value={form.type} onChange={updateField}><option>Movie</option><option>Concert</option><option>Event</option></select>
        <label>Theatre / Venue</label><input name="venue" value={form.venue} onChange={updateField} placeholder="Venue" />
        <label>Date & Time</label><input name="date" value={form.date} onChange={updateField} placeholder="Date & time" />
        <label>Ticket Price (₹)</label><input name="price" type="number" min="1" value={form.price} onChange={updateField} placeholder="Ticket price" />
        <label>Image URL (optional)</label><input name="image" value={form.image} onChange={updateField} placeholder="Image URL" />
        <button className="primary full" type="submit">{editingId ? "Save Changes" : "Add Event"}</button>
        {editingId && <button className="secondary full" type="button" onClick={() => {setEditingId(null);setForm(emptyForm);}}>Cancel Update</button>}
        {message && <p className="form-message">{message}</p>}
      </form>
      <div className="panel"><h3>Manage Events</h3>
        {events.map(item => <div className="admin-event" key={item.id}>
          <div><b>{item.name}</b><small>{item.type} · {item.venue} · ₹{item.price}</small></div>
          <div className="admin-actions"><button className="edit" onClick={() => edit(item)}>Edit</button><button className="delete" onClick={() => remove(item.id)}>Delete</button></div>
        </div>)}
      </div>
    </div>
  </section>;
}
function Stat({ label, value }) { return <div className="stat"><b>{value}</b><span>{label}</span></div>; }