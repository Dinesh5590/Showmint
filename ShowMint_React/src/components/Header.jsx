import { Link, NavLink } from "react-router-dom";
import { useApp } from "../state/AppContext";

export default function Header({ onAuth, onLocation }) {
  const { currentUser, setCurrentUser, location } = useApp();
  const logout = () => setCurrentUser(null);

  return <header className="topbar">
    <Link className="logo" to="/">Show<span>Mint</span></Link>
    <nav>
      <NavLink to="/">Home</NavLink><NavLink to="/movies">Movies</NavLink>
      <NavLink to="/concerts">Concerts</NavLink><NavLink to="/events">Events</NavLink>
      {currentUser?.role === "user" && <NavLink to="/bookings">My Bookings</NavLink>}
      {currentUser?.role === "admin" && <NavLink to="/admin">Admin</NavLink>}
    </nav>
    <div className="header-actions">
      {currentUser ? <>
        <button className="pill" onClick={onLocation}>📍 {location || "Set Location"}</button>
        <span className="welcome">Hi, {currentUser.name}</span>
        <button className="pill pink" onClick={logout}>Logout</button>
      </> : <button className="pill pink" onClick={onAuth}>Login / Signup</button>}
    </div>
  </header>;
}