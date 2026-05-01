import "./Mid.css";

import img1 from "../Gallery/Aimg1.jpg";
import img2 from "../Gallery/Aimg2.jpg";
import img3 from "../Gallery/Aimg5.png";

function Mid() {
  const steps = [
    {
      number: "1",
      title: "Discover Properties",
      text: "We understand your needs and shortlist the best properties.",
      image: img1,
    },
    {
      number: "2",
      title: "Visit & Explore",
      text: "Schedule visits and explore properties with expert guidance.",
      image: img2,
    },
    {
      number: "3",
      title: "Close the Deal",
      text: "We handle negotiation, legal work, and help you move in.",
      image: img3,
    },
  ];

  return (
    <section className="mid">
      <div className="mid-header">
        <span className="badge">Our Process</span>

        <h1>
          Our <span>Simple Process</span>
        </h1>
      </div>

      <div className="mid-grid">
        {steps.map((step, index) => (
          <div className="mid-card" key={index}>
            <img src={step.image} alt={step.title} />

            <div className="mid-content">
              <h4>Step {step.number}</h4>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mid;