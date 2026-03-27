import "./Header.css";

import img1 from "../../Gallery/img1.jpeg";
import img2 from "../../Gallery/img2.jpeg";
import img3 from "../../Gallery/img3.jpg";
import img4 from "../../Gallery/img2.jpeg";
import img5 from "../../Gallery/img3.jpg";

function Header() {
  return (
    <section className="details-header">

      <div className="details-grid">

        {/* LEFT BIG IMAGE */}
        <div className="big-image">
          <img src={img1} alt="property" />
        </div>

        {/* RIGHT GRID */}
        <div className="small-grid">
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>

      </div>

      {/* PROPERTY INFO */}
      <div className="property-info">

        <div className="location">
          📍 River Oaks, Houston, Texas
        </div>

        <div className="title-price">
          <h2>Billionaire Mansion</h2>
          <h3>$500,000</h3>
        </div>

        <div className="features">
          <span>🛏 8 Bedrooms</span>
          <span>🍳 1 Kitchen</span>
          <span>🚗 6 Parkings</span>
          <span>📐 6,800 sq.ft</span>
        </div>

      </div>

    </section>
  );
}

export default Header;