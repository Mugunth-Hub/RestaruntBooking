import "./Enquiries.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Enquiries() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get("http://localhost:5000/enquiries");
      console.log("API Data:", res.data);

      setData(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.log("Fetch error:", error);
      setError("Failed to load enquiries");
    } finally {
      setLoading(false);
    }
  };

  const deleteEnquiry = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/enquiry/${id}`);
      setData((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.log("Delete error:", error);
      setError("Failed to delete enquiry");
    }
  };

  return (
    <div className="enquiries-container">
      <h2 className="enquiries-title">Enquiries</h2>

      {loading ? (
        <p className="no-enquiries">Loading enquiries...</p>
      ) : error ? (
        <p className="no-enquiries">{error}</p>
      ) : data.length === 0 ? (
        <p className="no-enquiries">No enquiries yet</p>
      ) : (
        <div className="enquiries-grid">
          {data.map((item) => (
            <div key={item._id} className="enquiry-card">
              <h4 className="enquiry-name">{item.name || "No Name"}</h4>
              <p className="enquiry-email">{item.email || "No Email"}</p>

              {item.phone && (
                <p className="enquiry-phone">{item.phone}</p>
              )}

              <p className="enquiry-message">{item.message || "No Message"}</p>

              <p className="enquiry-property">
                🏠 {item.propertyTitle || "Unknown Property"}
              </p>

              <p className="enquiry-time">
                {item.createdAt
                  ? new Date(item.createdAt).toLocaleString()
                  : "No Date"}
              </p>

              <p className="status">
                Status: {item.status || "Pending"}
              </p>

              <button
                className="delete-btn"
                onClick={() => deleteEnquiry(item._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Enquiries;