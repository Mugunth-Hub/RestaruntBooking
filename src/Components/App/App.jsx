import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Booking from "../Booking/Booking";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
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
        <Route path="/booking" element={<Booking />} />
      </Route>
    </Routes>
  );
}

export default App;