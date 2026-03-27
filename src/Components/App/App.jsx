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
import Details from "../Home/Details/Details";

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

      {/* Layout wrapper */}
      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />

      </Route>

      {/* Login outside layout */}
      <Route path="/login" element={<Login />} />

    </Routes>
  );
}

export default App;