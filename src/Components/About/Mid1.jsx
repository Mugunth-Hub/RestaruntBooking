import "./Mid1.css";
import img6 from "../Gallery/Aimg6.jpg";
import img7 from "../Gallery/Aimg7.jpg";
import img8 from "../Gallery/Aimg8.jpg";
import img9 from "../Gallery/Aimg9.jpg";

function Mid1() {
  const experts = [
    {
      name: "Mugunth",
      role: "Eco-Friendly Property Specialist",
      img: img6,
    },
    {
      name: "Shalini",
      role: "Vacation Rental Specialist",
      img: img7,
    },
    {
      name: "Hemanth",
      role: "Green Building Advisor",
      img: img8,
    },
    {
      name: "Swathi",
      role: "Green Building Advisor",
      img: img9,
    },
  ];

  return (
   <section className="experts">

  <button className="tag">Meet Our Experts</button>

  <h2>
    PERSONALIZED GUIDENCE,<br />
    PROVEN EXPERTIES
  </h2>

  <div className="experts-container">

    {experts.map((expert, index) => (

      <div className="expert-card" key={index}>

        <div className="expert-img">
          <img src={expert.img} alt={expert.name} />
          <img src={expert.img} className="expert-photo" />
        </div>

        <h3>{expert.name}</h3>
        <p>{expert.role}</p>

      </div>

    ))}

  </div>

  <button className="view-btn">
    View All Expert Agents ↗
  </button>

</section>
  );
}

export default Mid1;