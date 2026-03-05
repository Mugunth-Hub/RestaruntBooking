import "./Mid3.css";
import bgImage from "../Gallery/img3.jpg"; // use your city image

function Mid3() {
  return (
    <div
      className="mid3-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="mid3-overlay">

        {/* LEFT CONTENT */}
        <div className="mid3-left">
          <h1>
            Discover a new way <br /> of living
          </h1>
          <p>
            Feugiat scriptorem qui ea, quo admodum eloquentiam eu.
            Te malis tibique eum. Ne magna assum everti.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="mid3-form-box">
          <h2>Make an enquiry</h2>
          <p className="form-subtext">
            Feugiat scriptorem qui ea, quo admodum eloquentiam eu.
            Te malis tibique eum.
          </p>

          <form>
            <input type="text" placeholder="Your name*" />
            <input type="email" placeholder="Your mail*" />
            <input type="tel" placeholder="Your Phone number*" />

            <button type="submit">Make a Enquiry</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Mid3;