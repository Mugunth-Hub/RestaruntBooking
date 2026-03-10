import "./Hero.css";
import residential from "../Gallery/residential.png";
import representation from "../Gallery/representation.png";
import manager from "../Gallery/manager.png";
import profit from "../Gallery/profit.png";
import audit from "../Gallery/audit.png";
import Solutions from "../Gallery/Solutions.png";

function Hero() {
  return (
    <section className="services">

     

      <h2 className="title">
        EXPLORE OUR RANGE OF <br />
        EXPERT REAL ESTATE SERVICES
      </h2>

      <div className="services-grid">

        <div className="card">
          <div className="icon-circle">
            <img src={residential} alt="" />
          </div>
          <h3>Property Sales</h3>
          <p>
            Expertly promoting and selling your property to attract qualified buyers.
          </p>
        </div>

        <div className="card">
          <div className="icon-circle">
            <img src={representation} alt="" />
          </div>
          <h3>Buyer Representation</h3>
          <p>
            Guiding you through the home-buying process, prioritizing your interests.
          </p>
        </div>

        <div className="card">
          <div className="icon-circle">
            <img src={manager} alt="" />
          </div>
          <h3>Rental Management</h3>
          <p>
            Managing tenant relations, maintenance, and finances to maximize returns.
          </p>
        </div>

        <div className="card">
          <div className="icon-circle">
            <img src={profit} alt="" />
          </div>
          <h3>Investment Consulting</h3>
          <p>
            Providing strategic advice to help you capitalize on real estate opportunities.
          </p>
        </div>

        <div className="card">
          <div className="icon-circle">
            <img src={audit} alt="" />
          </div>
          <h3>Property Valuation</h3>
          <p>
            Accurately assessing your property's value for sales or investments.
          </p>
        </div>

        <div className="card">
          <div className="icon-circle">
            <img src={Solutions} alt="" />
          </div>
          <h3>Tailored Solutions</h3>
          <p>
            Delivering customized real estate services aligned with your goals.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Hero;