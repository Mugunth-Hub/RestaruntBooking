import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "A" && pass === "1") {
      const userData = {
        name: "Admin",
        photo: "",
      };

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <a href="#" className="forgot-password">Forgot Password?</a>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;