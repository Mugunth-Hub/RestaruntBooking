import React, { useState } from "react";
import "./Profile.css";
import defaultProfileImg from "../Gallery/img3.jpg";

function Profile({ user, setUser }) {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.name || "Mugunth");
  const [photo, setPhoto] = useState(user?.photo || "");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name: name,
      photo: photo,
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setEditMode(false);
    alert("Profile updated successfully");
  };

  return (
    <div className="profile-page">
      {/* Top Profile Card */}
      <div className="profile-top-card">
        <div className="profile-top-left">
          <div className="profile-image-section">
            <img
              src={photo || defaultProfileImg}
              alt="Profile"
              className="profile-image"
            />

            {editMode && (
              <div className="upload-section">
                <label className="upload-label">Upload Profile Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="profile-file-input"
                />
              </div>
            )}
          </div>

          <div className="profile-main-info">
            <div className="name-location">
              {editMode ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="edit-name-input"
                  placeholder="Enter your name"
                />
              ) : (
                <h1>{user?.name || "Mugunth"}</h1>
              )}

              <p className="location">📍 Tirupur, TN</p>
            </div>

            <h3 className="role">Luxury Property Specialist</h3>

            <div className="ranking-section">
              <p className="ranking-title">RANKINGS</p>
              <div className="ranking-score">
                <span className="score">8,6</span>
                <span className="stars">★★★★★</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-top-right">
          <button className="icon-btn">🔖</button>
          <button className="light-btn">Contacts</button>
          <button className="primary-btn">Send message</button>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="profile-bottom-grid">
        {/* Left Column */}
        <div className="left-column">
          <div className="card work-card">
            <h4 className="section-title">WORK</h4>

            <div className="work-item">
              <div className="work-logo dark-logo">AA</div>
              <div>
                <h3>K.K Constructions</h3>
                <p>Transport</p>
                <span>2015 - PRESENT</span>
              </div>
            </div>

            <div className="work-item">
              <div className="work-logo light-logo">🏠</div>
              <div>
                <h3>Space Constructions  </h3>
                <p>Marketing</p>
                <span>2013 - 2015</span>
              </div>
            </div>
          </div>

          <div className="card skills-card">
            <h4 className="section-title">SKILLS</h4>

            <div className="skills-list">
              <span>Branding</span>
              <span>UI/UX</span>
              <span>Web Design</span>
              <span>Packaging</span>
              <span>Print & Editorial</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="card info-card">
          <div className="info-section">
            <h4 className="section-title">CONTACT INFORMATION</h4>

            <div className="info-grid">
              <div className="info-item">
                <label>Phone:</label>
                <a href="tel:+11234567890">+1 123 456 7890</a>
              </div>

              <div className="info-item">
                <label>Address:</label>
                <p>
                  525 E 68th St
                  <br />
                  Tirupur, TN 10651-78, IND
                </p>
              </div>

              <div className="info-item">
                <label>E-mail:</label>
                <a href="mailto:dooby@spatz.com">dooby@spatz.com</a>
              </div>

              <div className="info-item">
                <label>Site:</label>
                <a href="https://www.scooby.com" target="_blank" rel="noreferrer">
                  www.scooby.com
                </a>
              </div>
            </div>
          </div>

          <div className="info-section basic-info">
            <h4 className="section-title">BASIC INFORMATION</h4>

            <div className="info-grid">
              <div className="info-item">
                <label>Birthday:</label>
                <p>June 5, 1992</p>
              </div>

              <div className="info-item">
                <label>Gender:</label>
                <p>Male</p>
              </div>
            </div>
          </div>

          <div className="info-actions">
            {!editMode ? (
              <button onClick={() => setEditMode(true)}>✎ EDIT INFORMATION</button>
            ) : (
              <>
                <button onClick={handleSave}>✔ SAVE CHANGES</button>
                <button onClick={() => setEditMode(false)}>✖ CANCEL</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;