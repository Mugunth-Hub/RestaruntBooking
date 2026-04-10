import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import Hero from "./Hero";

function Details() {

  const { id } = useParams();
  const navigate = useNavigate(); // ✅ NEW

  const [property, setProperty] = useState(null);

  useEffect(() => {

    axios
      .get(`http://localhost:5000/property/${id}`)
      .then((res) => {
        console.log("Property Data :", res.data);
        setProperty(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [id]);

  return (
    <>
      <h1 style={{ padding: "40px" }}>
        Property Details Page : {id}
      </h1>

      {property && (
        <div style={{ padding: "20px" }}>
          <h2>{property.title}</h2>
          <p>{property.price}</p>

          {/* 🔥 ENQUIRE BUTTON */}
          <button
            onClick={() =>
              navigate("/contact", { state: { propertyId: id } })
            }
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "#4a90e2",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Enquire Now
          </button>
        </div>
      )}

      <Header />
      <Hero />
    </>
  );
}

export default Details;