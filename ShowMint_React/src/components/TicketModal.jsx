export default function TicketModal({ ticket, onClose }) {
  if (!ticket) return null;
  const download = () => {
    const safe = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>ShowMint Ticket ${safe(ticket.id)}</title><style>body{font-family:Arial;background:#eee;padding:24px}.ticket{max-width:560px;margin:auto;background:white;padding:28px;border-radius:16px}.brand{font-size:28px;font-weight:bold}.brand span{color:#ff3d71}.tag{color:#ff3d71;letter-spacing:2px;font-weight:bold}.info{border-top:1px dashed #aaa;border-bottom:1px dashed #aaa;padding:12px 0;margin:18px 0}.help{background:#fff3cd;padding:12px;border-radius:8px}</style></head><body><main class="ticket"><div class="brand">Show<span>Mint</span></div><p class="tag">BOOKING CONFIRMED</p><h2>${safe(ticket.name)}</h2><div class="info"><p><b>Customer:</b> ${safe(ticket.customerName)}</p><p><b>Mobile:</b> ${safe(ticket.mobile)}</p><p><b>Category:</b> ${safe(ticket.eventType)}</p><p><b>Date & time:</b> ${safe(ticket.date)}</p><p><b>Venue:</b> ${safe(ticket.venue)}</p><p><b>Location:</b> ${safe(ticket.location)}</p><p><b>Seats:</b> ${safe(ticket.seats.join(", "))}</p><p><b>Ticket count:</b> ${safe(ticket.seatCount)}</p><p><b>Price per ticket:</b> ₹${safe(ticket.ticketPrice)}</p><p><b>Total:</b> ₹${safe(ticket.total)}</p><p><b>Booked on:</b> ${safe(ticket.bookingDate)}</p><p><b>Payment:</b> ${safe(ticket.paymentMethod)} — ${safe(ticket.paymentStatus)}</p><p><b>Status:</b> ${safe(ticket.status)}</p></div><p><b>Ticket ID:</b> ${safe(ticket.id)}</p><p class="help">${safe(ticket.instructions)}</p><p>Thank you for booking with ShowMint.</p></main></body></html>`;
    const url = URL.createObjectURL(new Blob([html], { type: "text/html" }));
    const a = document.createElement("a"); a.href = url; a.download = `ShowMint_Ticket_${ticket.id}.html`; a.click(); URL.revokeObjectURL(url);
  };
  return <div className="overlay" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <div className="ticket-modal"><button className="x" onClick={onClose}>×</button>
      <div className="logo">Show<span>Mint</span></div><p className="tag">BOOKING CONFIRMED</p><h2>{ticket.name}</h2>
      <div className="ticket-info">
        <p><b>Customer:</b> {ticket.customerName}</p><p><b>Mobile:</b> {ticket.mobile}</p><p><b>Category:</b> {ticket.eventType}</p>
        <p><b>Date:</b> {ticket.date}</p><p><b>Venue:</b> {ticket.venue}</p><p><b>Location:</b> {ticket.location}</p>
        <p><b>Seats:</b> {ticket.seats.join(", ")}</p><p><b>Tickets:</b> {ticket.seatCount}</p>
        <p><b>Price per ticket:</b> ₹{ticket.ticketPrice}</p><p><b>Total:</b> ₹{ticket.total}</p>
        <p><b>Booked on:</b> {ticket.bookingDate}</p><p><b>Payment:</b> {ticket.paymentStatus}</p><p><b>Status:</b> {ticket.status}</p>
      </div>
      <p className="ticket-id">Ticket ID: {ticket.id}</p><p className="instructions">{ticket.instructions}</p>
      <div className="ticket-actions"><button className="primary" onClick={download}>Download Ticket</button><button className="secondary" onClick={() => window.print()}>Print / Save PDF</button></div>
    </div>
  </div>;
}