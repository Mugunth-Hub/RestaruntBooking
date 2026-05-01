import "./Header.css";

import img2 from "../../Gallery/img2.jpeg";
import img3 from "../../Gallery/img3.jpg";
import img4 from "../../Gallery/img2.jpeg";
import img5 from "../../Gallery/img3.jpg";

function Header({ property }) {
  return (
    <section className="details-header">
      <div className="details-grid">
        <div className="big-image">
          <img src={property.image} alt={property.title} />
        </div>

        <div className="small-grid">
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
      </div>

      <div className="property-info">
        <div className="location">📍 {property.location}</div>

        <div className="title-price">
          <h2>{property.title}</h2>
          <h3>{property.price}</h3>
        </div>

        <div className="features">
          <span>🛏 5 Bedrooms</span>
          <span>🍳 1 Kitchen</span>
          <span>🚗 3 Parkings</span>
          <span>📐 3,800 sq.ft</span>
        </div>
      </div>
    </section>
  );
}

export default Header;