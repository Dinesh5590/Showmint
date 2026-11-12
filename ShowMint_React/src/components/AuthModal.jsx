import { useState } from "react";
import { useApp } from "../state/AppContext";

export default function AuthModal({ onClose }) {
  const { users, setUsers, setCurrentUser } = useApp();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", mobile: "", email: "", password: "", role: "user" });
  const [error, setError] = useState("");
  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  function submit(e) {
    e.preventDefault(); setError("");
    if (!/^\d{10}$/.test(form.mobile)) return setError("Enter a valid 10-digit mobile number.");
    if (mode === "signup") {
      if (!form.name.trim() || form.password.length < 6) return setError("Enter your name and a password of at least 6 characters.");
      if (users.some(u => u.mobile === form.mobile)) return setError("Mobile number already registered.");
      const user = { ...form, pass: form.password };
      setUsers([...users, user]); setError("Account created. Please log in."); setMode("login"); return;
    }
    const user = users.find(u => u.mobile === form.mobile && (u.pass || u.password) === form.password && u.role === form.role);
    if (!user) return setError("Invalid mobile number, password or role.");
    setCurrentUser(user); onClose();
  }

  return <div className="overlay" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <div className="modal"><button className="x" onClick={onClose}>×</button>
      <div className="tabs"><button className={mode === "login" ? "active" : ""} onClick={() => {setMode("login");setError("");}}>Login</button><button className={mode === "signup" ? "active" : ""} onClick={() => {setMode("signup");setError("");}}>Sign Up</button></div>
      <p className="tag">{mode === "login" ? "WELCOME BACK" : "CREATE ACCOUNT"}</p><h2>{mode === "login" ? "Welcome back 👋" : "Create account ✨"}</h2>
      <form onSubmit={submit}>
        {mode === "signup" && <><label>Full Name</label><input name="name" value={form.name} onChange={change} placeholder="Your name" required /><label>Email (optional)</label><input name="email" type="email" value={form.email} onChange={change} placeholder="you@example.com" /></>}
        <label>Mobile Number</label><input name="mobile" value={form.mobile} onChange={change} maxLength="10" inputMode="numeric" placeholder="10-digit mobile number" required />
        <label>Password</label><input name="password" type="password" value={form.password} onChange={change} placeholder="Password" required />
        <label>Role</label><select name="role" value={form.role} onChange={change}><option value="user">User</option><option value="admin">Admin</option></select>
        <button className="primary full" type="submit">{mode === "login" ? "Login" : "Create Account"}</button>
      </form>
      {error && <p className="form-message">{error}</p>}
      <p className="demo">Admin demo: 9999999999 / admin123</p><p className="demo">User demo: 8888888888 / user123</p>
    </div>
  </div>;
}