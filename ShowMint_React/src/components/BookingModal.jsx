import { useMemo, useState } from "react";
import { useApp } from "../state/AppContext";

function getLayout(venue = "") {
  const layouts = {
    "pvr cinemas": { rows: 10, cols: 12, aisle: 6, premiumFrom: 8 },
    "inox": { rows: 9, cols: 14, aisle: 7, premiumFrom: 7 },
    "cinepolis": { rows: 10, cols: 14, aisle: 7, premiumFrom: 8 },
    "amb cinemas": { rows: 12, cols: 14, aisle: 7, premiumFrom: 9 }
  };
  const key = venue.toLowerCase();
  if (layouts[key]) return layouts[key];
  let hash = [...key].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 0);
  return { rows: 8 + hash % 5, cols: 10 + (hash >>> 3) % 5, aisle: 5 + (hash >>> 6) % 3, premiumFrom: 7 + hash % 3 };
}
const eventKey = event => `${event.id}|${event.venue}|${event.date}`;

export default function BookingModal({ event, onClose, onConfirmed }) {
  const { bookedSeats, setBookedSeats, currentUser, location } = useApp();
  const layout = useMemo(() => getLayout(event.venue), [event.venue]);
  const key = eventKey(event);
  const booked = bookedSeats[key] || [];
  const [selected, setSelected] = useState([]);
  const seats = Array.from({ length: layout.rows * layout.cols }, (_, i) => i + 1);
  const toggle = n => setSelected(old => old.includes(n) ? old.filter(x => x !== n) : [...old, n]);

  function confirm() {
    if (!selected.length) return alert("Select at least one seat.");
    const freshBooked = bookedSeats[key] || [];
    if (selected.some(n => freshBooked.includes(n))) return alert("One of the seats was just booked. Please select again.");
    const names = selected.map(n => `${String.fromCharCode(65 + Math.floor((n - 1) / layout.cols))}${((n - 1) % layout.cols) + 1}`);
    const ticket = {
      id: `TXR${Date.now().toString().slice(-8)}`, email: currentUser.email || "",
      customerName: currentUser.name, mobile: currentUser.mobile, eventType: event.type,
      name: event.name, date: event.date, venue: event.venue, location, seats: names,
      seatCount: names.length, ticketPrice: event.price, total: names.length * event.price,
      bookingDate: new Date().toLocaleString("en-IN"), paymentMethod: "Demo Online Payment",
      paymentStatus: "Paid (Demo)", status: "Confirmed",
      instructions: "Arrive 30 minutes before the show. Carry a valid photo ID. Show this ticket at the entry gate."
    };
    setBookedSeats(old => ({ ...old, [key]: [...(old[key] || []), ...selected] }));
    onConfirmed(ticket);
  }

  return <div className="overlay" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <div className="modal booking-modal"><button className="x" onClick={onClose}>×</button>
      <p className="tag">SELECT YOUR SEATS</p><h2>{event.name}</h2><p className="muted">📍 {event.venue} · {event.date} · {location}</p>
      <div className="legend"><span>Available</span><span>Selected</span><span>Booked</span><span>Premium</span></div>
      <div className="screen">SCREEN / STAGE</div>
      <div className="seat-map">{Array.from({ length: layout.rows }, (_, row) =>
        <div className="seat-row" key={row}><span className="row-label">{String.fromCharCode(65 + row)}</span>
          {seats.slice(row * layout.cols, (row + 1) * layout.cols).map(n => {
            const isBooked = booked.includes(n), isSelected = selected.includes(n), isPremium = row + 1 >= layout.premiumFrom;
            return <ReactSeat key={n} label={`${String.fromCharCode(65 + row)}${((n - 1) % layout.cols) + 1}`} booked={isBooked} selected={isSelected} premium={isPremium} onClick={() => toggle(n)} />;
          })}
        </div>)}
      </div>
      <p className="muted">This venue layout has {layout.rows * layout.cols} seats ({layout.rows} rows × {layout.cols} columns).</p>
      <div className="summary"><span>Selected: <b>{selected.length}</b><br />Total: <b>₹{selected.length * event.price}</b></span><button className="primary" onClick={confirm}>Confirm Booking</button></div>
    </div>
  </div>;
}

function ReactSeat({ label, booked, selected, premium, onClick }) {
  return <button disabled={booked} onClick={onClick} className={`seat ${booked ? "booked" : ""} ${selected ? "selected" : ""} ${premium ? "premium" : ""}`} title={booked ? "Already booked" : label}>{label}</button>;
}