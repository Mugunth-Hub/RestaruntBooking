import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

function Details() {

  const { id } = useParams();

  const [property, setProperty] = useState(null);

  useEffect(() => {

    axios
      .get(`http://localhost:5000/property/${id}`)   // ⭐ API CALL
      .then((res) => {
        console.log("Property Data :", res.data);   // ⭐ console output
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

      {/* ⭐ Optional show data */}
      {property && (
        <div style={{ padding: "20px" }}>
          <h2>{property.title}</h2>
          <p>{property.price}</p>
        </div>
      )}

      <Header />
      <Hero />
      <Footer />
    </>
  );
}

export default Details;