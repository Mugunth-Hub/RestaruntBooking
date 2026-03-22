import "./Contact.css";
import bgImage from "../Gallery/img2.jpeg";
import axios from "axios";
import React, { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    console.log("Sending Data :", formData);

    await axios.post("http://localhost:5000/contact", formData);

    console.log("Data Sent Successfully");
  };

  return (
    <>
      {/* CONTACT SECTION */}
      <section className="contact-section">

        <h2>
          LET’S MAKE YOUR PROPERTY JOURNEY <br />
          EFFORTLESS
        </h2>

        <p className="contact-text">
          Have questions or ready to take the next step? Whether you're looking
          to buy, rent, or invest, our team is here to guide you every step of the way.
        </p>

        <div className="contact-card">
          <form onSubmit={submit}>

            <div className="form-row">
              <input name="firstName" placeholder="First Name" onChange={handleChange}/>
              <input name="lastName" placeholder="Last Name" onChange={handleChange}/>
            </div>

            <div className="form-row">
              <input name="email" placeholder="Email" onChange={handleChange}/>
              <input name="phone" placeholder="Phone Number" onChange={handleChange}/>
            </div>

            <textarea name="message" rows="4" placeholder="What can we help you ?" onChange={handleChange}/>

            <button type="submit" className="contact-btn">
              Book a Call
            </button>

          </form>
        </div>

      </section>


      {/* FOOTER CTA */}

      <div className="footer-cta">

        <div className="cta-left">
          <h2>Need help? Talk to our expert</h2>
          <p>
            Talk to our experts or Browse through more properties
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


      {/* FOOTER */}

      <div className="footer-main">

        <div className="footer-col">
          <h3>Estate View</h3>
          <p>
            A contemporary theme we designed specifically for real estate
            and property showcase websites.
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

export default Contact;