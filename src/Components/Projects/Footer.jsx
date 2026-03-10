import "./Footer.css";
import bgImage from "../Gallery/img2.jpeg"; 

function Footer() {
  return (
    <>
      <div className="footer-cta">

        <div className="cta-left">
          <h2>Need help? Talk to our expert</h2>
          <p>
            Talk to our experts or Browse through
            more properties
          </p>

          <div className="cta-buttons">
            <button className="contact-btn">Contact us</button>
            <button className="phone-btn">📞 8870036584</button>
          </div>
        </div>

        <div
          className="cta-right custom-bg-height"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="newsletter-box">
            <h3>Sign to newsletter</h3>
            <p>
              Sign up to get the latest on new Products,
              Promotions, Design news and more
            </p>

            <div className="newsletter-input">
              <input type="email" placeholder="Your E-mail" />
              <button>sign up</button>
            </div>
          </div>
        </div>

      </div>

        <div className="footer-main">

        <div className="footer-col">
          <h3>Estate View</h3>
          <p>
            A contemporary theme we designed specifically for real estate
            and property showcase websites, equipped with every option,
            element and feature your site may need.
          </p>
        </div>

        <div className="footer-col">
          <h4>Contact us</h4>
          <p>
            Bangalore, Electronic Street, KA <br />
            8870036584 <br />
            EstateView@gmail.com
          </p>
        </div>

        <div className="footer-col">
          <h4>Categories</h4>
          <ul>
            <li>Recent Properties</li>
            <li>To sell</li>
            <li>To buy</li>
            <li>To rent</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Links</h4>
          <ul>
            <li>About us</li>
            <li>Latest news</li>
            <li>FAQ</li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default Footer;