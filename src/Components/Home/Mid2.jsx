import img1 from "../Gallery/img1.jpeg";
import img2 from "../Gallery/img2.jpeg";
import img3 from "../Gallery/img3.jpg";
import img4 from "../Gallery/img1.jpeg"; // reuse or add another image
import "./Mid2.css";

function Mid2() {
  const cities = [
    { name: "Tamilnadu", count: "129 Properties", image: img1 },
    { name: "Karnataka", count: "120 Properties", image: img2 },
    { name: "Kerala", count: "150 Properties", image: img3 },
    { name: "Andhra Pradesh", count: "160 Properties", image: img4 },
  ];

  return (
    <div className="mid2-section">
      <h2>
        Properties by <span style={{color:"#D4AF6A"}}>Cities</span>
      </h2>

      <div className="mid2-row">
        {cities.map((city, index) => (
          <div
            key={index}
            className="city-card"
            style={{ backgroundImage: `url(${city.image})` }}
          >
            <div className="overlay">
              <h3>{city.name}</h3>
              <p>{city.count}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mid2-button">
        <button>See all cities</button>
      </div>
    </div>
  );
}

export default Mid2;