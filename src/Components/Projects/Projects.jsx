import "./Projects.css";
import img1 from "../Gallery/img1.jpeg";
import img2 from "../Gallery/img2.jpeg";
import img3 from "../Gallery/img3.jpg";
import img4 from "../Gallery/img3.jpg";
import img5 from "../Gallery/img3.jpg";
import img6 from "../Gallery/img3.jpg";

const properties = [
  { img: img1, tag: "For Sale" },
  { img: img2, tag: "For Rent" },
  { img: img3, tag: "For Invest" },
  { img: img4, tag: "For Sale" },
  { img: img5, tag: "For Rent" },
  { img: img6, tag: "For Invest" },
];

function Projects() {
  return (
    <section className="about-section">
      <div className="property-grid">
        {properties.map((item, index) => (
          <div className="property-card" key={index}>
            
            <div className="property-image">
              <img src={item.img} alt="property" />
              <span className="property-tag">{item.tag}</span>
            </div>

            <div className="property-info">
              <p className="location">📍 River Oaks, Houston, Texas</p>

              <div className="title-price">
                <h3>Billionaire Mansion</h3>
                <span className="price">$500,000</span>
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
    </section>
  );
}

export default Projects;