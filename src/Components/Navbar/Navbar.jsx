import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../Gallery/Logo.jpeg";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const getInitials = (name) => {
    if (!name) return "G";
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };

  const handleLogout = () => {
    localStorage.removeItem("user");

    if (setUser) {
      setUser(null);
    }

    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4">
      <NavLink className="navbar-brand d-flex align-items-center" to="/home">
        <img src={logo} alt="Logo" className="logo-img" />
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav mx-auto gap-3">
         <li className="nav-item">
         <NavLink to="/home" className="nav-link">Home</NavLink>
         </li>

         <li className="nav-item">
         <NavLink to="/about" className="nav-link">About</NavLink>
         </li>

         <li className="nav-item">
         <NavLink to="/projects" className="nav-link">Properties</NavLink>
         </li>

         <li className="nav-item">
         <NavLink to="/contact" className="nav-link">Contact</NavLink>
         </li>
        </ul>

        <div className="d-flex align-items-center gap-3 nav-right-box">
          <div
            onClick={() => navigate("/profile")}
            className="profile-wrapper"
            style={{ cursor: "pointer" }}
          >
            {user?.photo ? (
              <img
                src={user.photo}
                alt="Profile"
                className="profile-circle-img"
              />
            ) : (
              <div className="profile-circle">
                {getInitials(user?.name)}
              </div>
            )}

            <span className="profile-name">{user?.name || "Guest"}</span>
          </div>

          <button
            onClick={handleLogout}
            className="btn btn-outline-dark rounded-pill px-3"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;