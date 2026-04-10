import "./Section2.css";
import img1 from "../Gallery/img1.jpeg";
import img2 from "../Gallery/img2.jpeg";
import img3 from "../Gallery/img3.jpg";
import img4 from "../Gallery/img3.jpg";
import img5 from "../Gallery/img3.jpg";
import img6 from "../Gallery/img3.jpg";
import { useNavigate } from "react-router-dom";

// ✅ Add real data
const properties = [
  {
    id: 7,
    img: img1,
    tag: "Completed",
    title: "Luxury Family Villa",
    price: "₹6 Crores"
  },
  {
    id: 8,
    img: img2,
    tag: "Completed",
    title: "Green Valley Homes",
    price: "₹2.5 Crores"
  },
  {
    id: 9,
    img: img3,
    tag: "Completed",
    title: "Urban City Flats",
    price: "₹90 Lakhs"
  },
  {
    id: 10,
    img: img4,
    tag: "Completed",
    title: "Lake View Residency",
    price: "₹3.2 Crores"
  },
  {
    id: 11,
    img: img5,
    tag: "Completed",
    title: "Premium Duplex House",
    price: "₹4 Crores"
  },
  {
    id: 12,
    img: img6,
    tag: "Completed",
    title: "Modern Smart Villa",
    price: "₹5.5 Crores"
  }
];

function Section2() {

  const navigate = useNavigate();

  return (
    <section className="projects-section">
      <div className="projects-container">

        <button className="section-btn">Completed Property</button>

        <h2 className="section-title">
          EXPLORE OUR SUCCESSFULLY <br />
          COMPLETED PROJECTS
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
                  <span className="price">{item.price}</span>
                </div>

                <div className="features">
                  <span>🛏 4 Beds</span>
                  <span>🚗 2 Parking</span>
                  <span>📐 3,200 sq.ft</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Section2;