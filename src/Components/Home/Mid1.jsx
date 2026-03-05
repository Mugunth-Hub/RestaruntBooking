import { FaHome, FaUserTie, FaFileAlt, FaKey } from "react-icons/fa";
import "./Mid1.css";

function Mid1() {
  return (
    <div className="mid1-section">
      <h2>See How it works</h2>
      <p className="subtitle">Find a perfect home</p>

      <div className="mid1-row">
        <div className="mid1-card">
          <FaHome className="icon" />
          <h3>Find real estate</h3>
          <p>
            Nullam sollicitudin blandit eros eu pretium.
            Nullam maximus ultricies auctor.
          </p>
        </div>

        <div className="mid1-card">
          <FaUserTie className="icon" />
          <h3>Meet realtor</h3>
          <p>
            Nullam sollicitudin blandit eros eu pretium.
            Nullam maximus ultricies auctor.
          </p>
        </div>

        <div className="mid1-card">
          <FaFileAlt className="icon" />
          <h3>Documents</h3>
          <p>
            Nullam sollicitudin blandit eros eu pretium.
            Nullam maximus ultricies auctor.
          </p>
        </div>

        <div className="mid1-card">
          <FaKey className="icon" />
          <h3>Take the keys</h3>
          <p>
            Nullam sollicitudin blandit eros eu pretium.
            Nullam maximus ultricies auctor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mid1;