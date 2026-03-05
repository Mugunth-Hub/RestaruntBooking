import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      
      <div className="contact-top">
        <button className="contact-badge">Get in Touch</button>

        <h2>
          LET’S MAKE YOUR PROPERTY JOURNEY <br /> EFFORTLESS
        </h2>

        <p>
          Have questions or ready to take the next step? Whether you’re
          looking to buy, rent, or invest, our team is here to guide you
          every step of the way. Let’s turn your property goals into reality.
        </p>
      </div>

      <div className="contact-card">
        <form>

          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
          </div>

          <textarea
            rows="4"
            placeholder="What can we help you ?"
          ></textarea>

          <button className="contact-btn">Book a Call</button>

        </form>
      </div>

    </section>
  );
}

export default Contact;