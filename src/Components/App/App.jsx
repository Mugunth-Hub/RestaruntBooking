import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Projects from "../Projects/Projects";
import { Outlet } from "react-router-dom";
import BackToTop from "./BackToTop";

export function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <BackToTop />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Login WITHOUT Navbar */}
      <Route path="/" element={<Login />} />

      {/* All pages WITH Navbar */}
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Projects" element={<Projects />} />
      </Route>
    </Routes>
    
  );
}

export default App;