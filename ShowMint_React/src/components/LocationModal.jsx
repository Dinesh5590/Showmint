import { useState } from "react";
import { useApp } from "../state/AppContext";

const locations = ["Vijayawada","Guntur","Tirupati","Hyderabad","Bengaluru","Chennai","Visakhapatnam","Mumbai","Delhi","Kolkata","Pune","Kochi"];

export default function LocationModal({ onClose }) {
  const { setLocation } = useApp();
  const [query, setQuery] = useState("");
  const filtered = locations.filter(city => city.toLowerCase().includes(query.toLowerCase()));
  const choose = city => { setLocation(city); onClose(); };
  return <div className="overlay" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <div className="modal"><button className="x" onClick={onClose}>×</button><p className="tag">LOCATION</p><h2>Choose your location</h2>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search city or location..." />
      <div className="location-list">{filtered.map(city => <button key={city} onClick={() => choose(city)}>📍 {city}</button>)}</div>
    </div>
  </div>;
}