import "./Projects.css";
import img1 from "../Gallery/img1.jpeg";
import img2 from "../Gallery/img2.jpeg";
import img3 from "../Gallery/img3.jpg";
import img4 from "../Gallery/img3.jpg";
import img5 from "../Gallery/img3.jpg";
import img6 from "../Gallery/img3.jpg";
import { useNavigate } from "react-router-dom";

// ✅ Updated property data (with id, title, price)
const properties = [
  {
    id: 1,
    img: img1,
    tag: "For Sale",
    title: "South Sun Apartment",
    price: "₹5 Crores"
  },
  {
    id: 2,
    img: img2,
    tag: "For Rent",
    title: "Red Valley Land",
    price: "₹12 Lakhs"
  },
  {
    id: 3,
    img: img3,
    tag: "For Invest",
    title: "Park House Villa",
    price: "₹3 Crores"
  },
  {
    id: 4,
    img: img4,
    tag: "For Sale",
    title: "Luxury Beach House",
    price: "₹8 Crores"
  },
  {
    id: 5,
    img: img5,
    tag: "For Rent",
    title: "City View Apartment",
    price: "₹25,000/month"
  },
  {
    id: 6,
    img: img6,
    tag: "For Invest",
    title: "Commercial Land",
    price: "₹1.5 Crores"
  }
];

function Section1() {

  const navigate = useNavigate();

  return (
    <section className="projects-section">

      <div className="container">

        <button className="section-btn">On Going Property</button>

        <h2 className="section-title">
          DISCOVER HOME TAILORED TO YOUR <br />
          LIFESTYLE AND NEEDS
        </h2>

        <div className="property-grid">
          {properties.map((item) => (
            <div
              className="property-card"
              key={item.id}
              onClick={() => navigate(`/details/${item.id}`)}
              style={{ cursor: "pointer" }}
            >

              <div className="property-image">
                <img src={item.img} alt="property" />
                <span className="property-tag">{item.tag}</span>
              </div>

              <div className="property-info">

                <p className="location">📍 River Oaks, Houston, Texas</p>

                <div className="title-price">
                  <h3>{item.title}</h3>
                  <span>{item.price}</span>
                </div>

                <div className="features">
                  <span>🛏 5 Beds</span>
                  <span>🚗 3 Parking</span>
                  <span>📐 3,800 sq.ft</span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Section1;