import "./Section2.css";
import img1 from "../Gallery/img1.jpeg";
import img2 from "../Gallery/img2.jpeg";
import img3 from "../Gallery/img3.jpg";
import img4 from "../Gallery/img3.jpg";
import img5 from "../Gallery/img3.jpg";
import img6 from "../Gallery/img3.jpg";

const properties = [
  { img: img1, tag: "Completed" },
  { img: img2, tag: "Completed" },
  { img: img3, tag: "Completed" },
  { img: img4, tag: "Completed" },
  { img: img5, tag: "Completed" },
  { img: img6, tag: "Completed" },
];

function Section2() {
  return (
    <section className="projects-section">
  <div className="projects-container">

   <button className="section-btn">Completed Property</button>

<h2 className="section-title">
EXPLORE OUR SUCCESSFULLY <br/>
COMPLETED PROJECTS
</h2>

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
              <h3>Luxury Family Villa</h3>
              <span className="price">$650,000</span>
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