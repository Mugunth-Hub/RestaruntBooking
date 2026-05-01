import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Hero from "./Hero";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/properties/${id}`)
      .then((res) => {
        setProperty(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching property:", err.response?.data || err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2 style={{ padding: "40px" }}>Loading...</h2>;
  }

  if (!property) {
    return <h2 style={{ padding: "40px" }}>Property not found</h2>;
  }

  return (
    <>
      <Header property={property} />

      <div style={{ padding: "0 8% 40px" }}>
        <button
          onClick={() =>
            navigate("/contact", {
              state: {
                propertyId: property._id,
                propertyTitle: property.title,
              },
            })
          }
          style={{
            padding: "12px 28px",
            background: "#D4AF6A",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Enquire Now
        </button>
      </div>

      <Hero property={property} />
    </>
  );
}

export default Details;