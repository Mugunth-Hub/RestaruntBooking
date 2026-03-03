import midImage from "../Gallery/img1.jpeg";
import "./Mid.css";

function MidSection() {
  return (
    <div className="mid-section">
      <div className="mid-left">
        <h2>Find Your Dream Property</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Wisi nemore fastidii at vis, eos equidem admodum.
          Discover premium locations with trusted guidance.
        </p>
        <button>Explore Now</button>
      </div>

      <div className="mid-right">
        <img src={midImage} alt="Property" />
      </div>
    </div>
  );
}

export default MidSection;