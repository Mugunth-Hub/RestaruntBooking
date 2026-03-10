import "./Header.css";
import teamImage from "../Gallery/About1.jpg";
import visionIcon from "../Gallery/Eye.png";
import teamIcon from "../Gallery/Team.png";
import solutionIcon from "../Gallery/Solutions.png";

function Header() {
  return (
    <section className="about-header">

      {/* LEFT SIDE */}
      <div className="about-left">
        <button className="about-badge">Who We Are</button>

        <h1>
          REDEFINING <br />
          EXCELLENCE IN REAL <br />
          ESTATE
        </h1>

        <p>
          Founded with a passion for exceptional living spaces, we specialize
          in luxury properties, green and sustainable homes, and vacation rentals.
        </p>

        <p>
          Our journey is defined by a commitment to quality, innovation,
          and client satisfaction.
        </p>

        <div className="about-stats">
          <div>
            <h2>200+</h2>
            <span>Projects Complete</span>
          </div>

          <div>
            <h2>70+</h2>
            <span>Happy Clients</span>
          </div>

          <div>
            <h2>₹3C+</h2>
            <span>Project Value</span>
          </div>

          <div>
            <h2>90%</h2>
            <span>Client Retention Rate</span>
          </div>
        </div>
      </div>

      {/* CENTER IMAGE */}
      <div className="about-image">
        <img src={teamImage} alt="Team" />
      </div>

      {/* RIGHT SIDE */}
      <div className="about-right">

  <div className="info-box">
    <h3>
      <img src={visionIcon} className="icon" alt="Vision" />
      Our Vision
    </h3>
    <p>
      To be a leader in the real estate market, offering unparalleled
      services in luxury, sustainability, and vacation properties.
    </p>
  </div>

  <div className="info-box">
    <h3>
      <img src={teamIcon} className="icon" alt="Team" />
      Expert Team
    </h3>
    <p>
      Our team comprises seasoned professionals with extensive
      experience in luxury real estate and sustainable housing.
    </p>
  </div>

  <div className="info-box">
    <h3>
      <img src={solutionIcon} className="icon" alt="Solutions" />
      Tailored Solutions
    </h3>
    <p>
      We offer customized real estate services aligned with your
      lifestyle and investment goals.
    </p>
  </div>

</div>

    </section>
  );
}

export default Header;