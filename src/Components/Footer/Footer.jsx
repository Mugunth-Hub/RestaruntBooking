import "./Footer.css";
import bgImage from "../Gallery/img2.jpeg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* CTA SECTION */}
      <div className="footer-cta container-fluid">
        <div className="container">
          <div className="row align-items-center g-4">

            {/* LEFT */}
            <div className="col-lg-6">
              <h2 className="cta-title">
                Need help? Talk to our expert
              </h2>

              <p className="cta-text">
                Talk to our experts or browse through more properties
              </p>

              <div className="d-flex gap-3 mt-4 flex-wrap justify-content-lg-start justify-content-center">

<NavLink to="/contact" className="btn btn-outline-dark custom-btn">
  Contact us
</NavLink>

  <a
    href="tel:8870036584"
    className="btn btn-dark custom-btn d-flex align-items-center justify-content-center gap-2"
  >
    <i className="bi bi-telephone"></i>
    <span>8870036584</span>
  </a>

</div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6 position-relative">
              <div
                className="cta-image"
                style={{ backgroundImage: `url(${bgImage})` }}
              ></div>

              <div className="newsletter-box">
                <h5 className="fw-semibold mb-2">Sign to newsletter</h5>

                <p className="newsletter-text">
                  Get updates on new properties, offers and design trends
                </p>

                <div className="d-flex mt-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your E-mail"
                  />
                  <button className="btn btn-warning ms-2 px-4">
                    sign up
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER MAIN */}
      <div className="footer-main container-fluid">
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-3 col-md-6">
              <h6 className="fw-bold mb-3">Estate View</h6>
              <p className="footer-desc">
                A modern theme designed for real estate websites with all
                essential features and flexibility.
              </p>
            </div>

            <div className="col-lg-3 col-md-6">
              <h6 className="fw-bold mb-3">Contact</h6>
              <p className="footer-desc">
                Bangalore, Electronic Street, KA <br />
                8870036584 <br />
                EstateView@gmail.com
              </p>
            </div>

            <div className="col-lg-3 col-md-6">
              <h6 className="fw-bold mb-3">Categories</h6>
              <ul className="list-unstyled footer-links">
                <li>Recent Properties</li>
                <li>To sell</li>
                <li>To buy</li>
                <li>To rent</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h6 className="fw-bold mb-3">Links</h6>
              <ul className="list-unstyled footer-links">
                <li>About us</li>
                <li>Latest news</li>
                <li>FAQ</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;