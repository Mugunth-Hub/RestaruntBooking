function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Name" /><br />
        <input type="tel" placeholder="Phone" /><br />
        <input type="email" placeholder="Email" /><br />
        <textarea placeholder="How can we help?" /><br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;