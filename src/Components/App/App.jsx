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

// Layout with Navbar
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

    if (savedUser) {
      return JSON.parse(savedUser);
    }

    return {
      name: "Sindhu",
      photo: "",
    };
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />

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

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;