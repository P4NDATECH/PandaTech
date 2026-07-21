import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";

const links = [["Inicio", "/"], ["Productos", "/productos"], ["JARVIS", "/jarvis"], ["Tutoriales", "/tutoriales"], ["Descargas", "/descargas"]];
export default function Navbar() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn = () => setScrolled(scrollY > 12); addEventListener("scroll", fn); return () => removeEventListener("scroll", fn); }, []);
  return <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}><nav aria-label="Navegación principal">
    <NavLink className="brand" to="/" onClick={() => setOpen(false)}><img src="/logo.png" alt="" /><span>PandaTech</span><b>®</b></NavLink>
    <div className={`nav-links ${open ? "open" : ""}`}>{links.map(([name, path]) => <NavLink key={path} end={path === "/"} to={path} onClick={() => setOpen(false)}>{name}</NavLink>)}<a className="nav-community" href="https://discord.gg/k3tTM3Y7W" target="_blank" rel="noreferrer"><MessageCircle size={15} />Comunidad</a></div>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"}>{open ? <X /> : <Menu />}</button>
  </nav></header>;
}
