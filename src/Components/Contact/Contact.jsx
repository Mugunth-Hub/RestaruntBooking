import "./Contact.css";
import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();

  const propertyId = location.state?.propertyId || "";
  const propertyTitle = location.state?.propertyTitle || "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      propertyId: propertyId,
      propertyTitle: propertyTitle
    };

    console.log("Sending Data :", dataToSend);

    try {
      await axios.post("http://localhost:5000/contact", dataToSend);

      alert("Enquiry submitted successfully");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <section className="contact-section container py-5">
      <div className="text-center mb-5">
        <h2 className="contact-heading">
          LET’S MAKE YOUR PROPERTY JOURNEY <br />
          EFFORTLESS
        </h2>

        <p className="contact-text mx-auto">
          Have questions or ready to take the next step? Our team is here to guide you.
        </p>

        {propertyTitle && (
          <div className="selected-property-badge mt-3">
            Enquiring for: <strong>{propertyTitle}</strong>
          </div>
        )}
      </div>

      <div className="contact-card shadow-sm mx-auto">
        <form onSubmit={submit}>
          <div className="row g-4">
            <div className="col-md-6">
              <input
                type="text"
                name="firstName"
                className="form-control custom-input"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="text"
                name="lastName"
                className="form-control custom-input"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                name="email"
                className="form-control custom-input"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="text"
                name="phone"
                className="form-control custom-input"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="col-12">
              <textarea
                name="message"
                rows="5"
                className="form-control custom-input custom-textarea"
                placeholder="What can we help you with?"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="col-12 text-center">
              <button type="submit" className="btn contact-btn px-4 py-2">
                Book a Call
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;