import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../Gallery/img1.jpeg";
import img2 from "../Gallery/img2.jpeg";
import img3 from "../Gallery/img3.jpg";
import "./Header.css";

function Header() {

  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

 return (
  <section
    className="header"
    style={{ backgroundImage: `url(${images[index]})` }}
  >
    <div className="header-content">
      <span className="hero-badge">Premium Real Estate</span>

      <h1>
        Buy or Sell Property <br />
        <span>With No Commission</span>
      </h1>

      <p>
        Discover trusted properties, premium locations, and a smoother way to
        find your dream home.
      </p>

      <button className="hero-btn">
        Explore Properties
      </button>
    </div>

    <div className="header-dots">
      {images.map((_, i) => (
        <span
          key={i}
          className={i === index ? "active" : ""}
          onClick={(e) => {
            e.stopPropagation();
            setIndex(i);
          }}
        ></span>
      ))}
    </div>
  </section>
);
}

export default Header;