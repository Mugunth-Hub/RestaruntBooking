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
    <div
      className="header"
      style={{ backgroundImage: `url(${images[index]})` }}
      
    >
      <div className="header-text">
        <h1>Buy or Sell Property</h1>
        <p>With No Commission</p>
      </div>

      <div className="header-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={(e) => {
              e.stopPropagation();   // ⭐ prevents navigation when clicking dot
              setIndex(i);
            }}
          ></span>
        ))}
      </div>

    </div>
  );
}

export default Header;