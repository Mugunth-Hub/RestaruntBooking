import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Projects from "../Projects/Projects";
import BackToTop from "./BackToTop";
import Details from "../Home/Details/Details";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ScrollToTop from "./ScrollToTop";

// Private Route
function PrivateRoute({ user }) {
  return user ? <Outlet /> : <Navigate to="/" />;
}

// Layout
export function Layout({ user, setUser }) {
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Outlet context={{ user, setUser }} />
      <Footer />
      <BackToTop />
      <ScrollToTop />
    </>
  );
}

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} />} />

      <Route element={<PrivateRoute user={user} />}>
        <Route element={<Layout user={user} setUser={setUser} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;