import "./Mid2.css";
import user1 from "../Gallery/Aimg6.jpg";
import user2 from "../Gallery/Aimg7.jpg";
import user3 from "../Gallery/Aimg8.jpg";

function Mid2() {
  const reviews = [
    {
      img: user1,
      name: "Arun Kumar",
      role: "Villa Buyer",
      text: "The team helped me shortlist the right property and guided me clearly until the final deal.",
    },
    {
      img: user2,
      name: "Priya S",
      role: "Apartment Buyer",
      text: "The process was smooth, professional, and transparent. I got regular updates at every stage.",
    },
    {
      img: user3,
      name: "Rahul Menon",
      role: "Property Investor",
      text: "Their market knowledge and negotiation support helped me make a confident investment decision.",
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-left">
        <span className="testimonial-btn">What Our Clients Say</span>

        <h2>
          Trusted by Many,<br />
          <span>Loved by All</span>
        </h2>

        <p>
          Real stories from clients who found the right property with clear
          guidance and trusted support.
        </p>
      </div>

      <div className="testimonial-grid">
        {reviews.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-stars">★★★★★</div>

            <p className="review-text">“{item.text}”</p>

            <div className="testimonial-user">
              <img src={item.img} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mid2;