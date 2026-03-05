import img1 from "../Gallery/img1.jpeg";
import img2 from "../Gallery/img2.jpeg";
import img3 from "../Gallery/img3.jpg";
import "./Hero.css";

function Hero() {
  const properties = [
    {
      image: img1,
      location: "APARTMENT - Kochi",
      title: "South Sun Apartment’s",
      desc: "Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum",
      price: "₹5 Crores",
    },
    {
      image: img2,
      location: "LAND - Kashmir",
      title: "Red Valley Lands",
      desc: "Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum",
      price: "₹12L - 1 Sq",
    },
    {
      image: img3,
      location: "VILLA - Chennai",
      title: "Park House",
      desc: "Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem admodum",
      price: "₹3 Crores",
    },
  ];

  return (
    <section className="hero-section">

      {/* Heading Row */}
      <div className="hero-header">
        <h2>Our choice of popular real estate</h2>
        <span className="arrow">→</span>
      </div>

      {/* Cards */}
      <div className="hero-row">
        {properties.map((item, i) => (
          <div key={i} className="hero-card">
            
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
              <span className="badge">Sell</span>
            </div>

            <div className="hero-content">
              <p className="location">{item.location}</p>
              <h3>{item.title}</h3>
              <p className="description">{item.desc}</p>
              <h4 className="price">{item.price}</h4>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Hero;