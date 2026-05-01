import { useNavigate } from "react-router-dom";
import img1 from "../Gallery/img1.jpeg";
import img2 from "../Gallery/img2.jpeg";
import img3 from "../Gallery/img3.jpg";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  const properties = [
    {
      id: 1,
      image: img1,
      location: "APARTMENT -Kochi",
      title: "South Sun Apartment’s",
      description:
        "Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum",
      price: "₹5croes",
    },
    {
      id: 2,
      image: img2,
      location: "LAND -Kashmir",
      title: "Red Valley Lands",
      description:
        "Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum",
      price: "₹12l - 1Sq",
    },
    {
      id: 3,
      image: img3,
      location: "VILLA-Chennai",
      title: "Park House",
      description:
        "Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum",
      price: "₹3croes",
    },
  ];

  return (
    <section className="hero-section">
      <div className="hero-header">
        <h2>Our choice of popular real estate</h2>
        <span className="arrow">→</span>
      </div>

      <div className="hero-row">
        {properties.map((item) => (
          <div
            key={item.id}
            className="hero-card"
            onClick={() => navigate(`/details/${item.id}`)}
          >
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
              <span className="badge">Sell</span>
            </div>

            <div className="hero-content">
              <p className="location">📍 {item.location}</p>
              <h3>{item.title}</h3>
              <p className="description">{item.description}</p>
              <h4 className="price">{item.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;