import "./Hero.css";
import heroImage from "../Gallery/img3.jpg"; // change if needed

function Hero() {
  return (
    <section className="hero">

      {/* TOP CONTENT */}
      <div className="hero-top">
        <button className="hero-badge">What We Offer</button>

        <h1>COMPREHENSIVE REAL ESTATE SOLUTIONS</h1>

        <p>
          Our comprehensive services encompass luxury property sales,
          sustainable green building investments, and premium vacation rentals.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="hero-content">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <div className="icon">🏙</div>
          <h3>Luxury Residences</h3>
          <p>
            Experience unparalleled elegance in our luxury residences,
            featuring exquisite design, premium amenities, and prime
            locations for the most discerning tastes.
          </p>
        </div>

        {/* CENTER IMAGE */}
        <div className="hero-image">
          <img src={heroImage} alt="Luxury Property" />

          <div className="image-label">
            <h2>01</h2>
            <span>Luxury Residences</span>
          </div>
        </div>

        {/* RIGHT SIDE VERTICAL */}
        <div className="hero-right">
          <div className="vertical-item">02 Eco Green Buildings</div>
          <div className="vertical-item">03 Unique Vacation Homes</div>
        </div>

      </div>
    </section>
  );
}

export default Hero;