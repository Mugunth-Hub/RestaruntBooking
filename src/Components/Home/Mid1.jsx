import { FaHome, FaUserTie, FaFileAlt, FaKey } from "react-icons/fa";
import "./Mid1.css";

function Mid1() {
  return (
    <div className="mid1-section">
      <h2>See How it works</h2>
      <p className="subtitle">Find a perfect home</p>

      <div className="mid1-row">
        <div className="mid1-card">
          <div className="icon-box">
            <FaHome />
          </div>
          <h3>Find real estate</h3>
          <p>
            Nullam sollicitudin blandit eros eu pretium.
            Nullam maximus ultricies auctor.
          </p>
        </div>

        <div className="mid1-card">
          <div className="icon-box">
            <FaUserTie />
          </div>
          <h3>Meet realtor</h3>
          <p>
            Nullam sollicitudin blandit eros eu pretium.
            Nullam maximus ultricies auctor.
          </p>
        </div>

        <div className="mid1-card">
          <div className="icon-box">
            <FaFileAlt />
          </div>
          <h3>Documents</h3>
          <p>
            Nullam sollicitudin blandit eros eu pretium.
            Nullam maximus ultricies auctor.
          </p>
        </div>

        <div className="mid1-card">
          <div className="icon-box">
            <FaKey />
          </div>
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