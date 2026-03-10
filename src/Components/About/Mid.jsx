import "./Mid.css";

import img1 from "../Gallery/Aimg1.jpg";
import img2 from "../Gallery/Aimg2.jpg";
import img3 from "../Gallery/Aimg3.png";
import img4 from "../Gallery/Aimg4.png";
import img5 from "../Gallery/Aimg5.png";

function Mid() {
  const steps = [
    {
      number: "1",
      title: "Discover Ideal Properties",
      text: "We begin by understanding your needs and presenting a curated list of properties that match your lifestyle and investment goals—whether it’s luxury living, eco-conscious design, or vacation retreats.",
      image: img1,
    },
    {
      number: "2",
      title: "Schedule Private Tours",
      text: "Our team coordinates seamless property viewings, allowing you to explore each option in person or virtually, with expert guidance throughout the visit.",
      image: img2,
    },
    {
      number: "3",
      title: "Personalized Consultation & Negotiation",
      text: "We help evaluate the property, provide insights on value and sustainability, and assist with tailored offers and negotiations to secure the best deal.",
      image: img3,
    },
    {
      number: "4",
      title: "Legal & Documentation Support",
      text: "We simplify the legal process, ensuring all paperwork, contracts, and documentation are handled professionally and securely.",
      image: img4,
    },
    {
      number: "5",
      title: "Close & Move In",
      text: "Once the deal is closed, we support your transition, whether it’s settling into your dream home, managing a rental, or preparing an investment property for returns.",
      image: img5,
    },
  ];

  return (
    <section className="mid">
      <div className="mid-header">
        <button>Our Process</button>
        <h1>GUIDE YOU THROUGH EVERY STEP OF THE REAL ESTATE JOURNEY</h1>
      </div>

      {steps.map((step, index) => (
        <div
          className={`mid-row ${index % 2 !== 0 ? "reverse" : ""}`}
          key={index}
        >
          {/* TEXT */}
          <div className="mid-text">
            <h2>Step / {step.number}</h2>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>

          {/* IMAGE */}
          <div className="mid-image">
            <img src={step.image} alt={step.title} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Mid;