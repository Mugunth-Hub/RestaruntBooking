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
       <nav className="navbar">

      <NavLink to="/home" className="nav-link">
        Home
      </NavLink>

      <NavLink to="/about" className="nav-link">
        About
      </NavLink>

      <NavLink to="/projects" className="nav-link">
        Projects
      </NavLink>

      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>

    </nav>

      {/* Center links
      <div className="nav-center">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/Projects">Projects</NavLink>
      </div> */}

      {/* Right side */}
      <div className="nav-right">
        <NavLink to="/profile">👤</NavLink>
        <button onClick={() => navigate("/")}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;