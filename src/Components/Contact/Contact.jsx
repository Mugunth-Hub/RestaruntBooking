import "./Contact.css";

function Contact() {
  return (
    <div className="contact-form">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="tel" placeholder="Phone" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="How can we help?" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;