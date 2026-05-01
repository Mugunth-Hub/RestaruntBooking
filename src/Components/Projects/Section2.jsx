import "./Section2.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Section2() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/properties")
      .then((res) => {
        setProperties(res.data.slice(0, 6));
      })
      .catch((err) => {
        console.log("Error fetching properties:", err.response?.data || err.message);
      });
  }, []);

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
              key={item._id}
              onClick={() => navigate(`/details/${item._id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="property-image">
                <img src={item.image} alt={item.title} />
                <span className="property-tag">Completed</span>
              </div>

              <div className="property-info">
                <p className="location">📍 {item.location}</p>

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