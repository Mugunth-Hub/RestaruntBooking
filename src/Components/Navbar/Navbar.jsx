import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../Gallery/Logo.jpeg";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Center links */}
      <div className="nav-center">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/booking">Booking</NavLink>
      </div>

      {/* Right side */}
      <div className="nav-right">
        <NavLink to="/profile">👤</NavLink>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;