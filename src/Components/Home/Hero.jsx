import img1 from "../Gallery/Photo/img1.jpeg";
import img2 from "../Gallery/Photo/img2.jpeg";
import img3 from "../Gallery/Photo/img3.jpg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      {[img1, img2, img3].map((img, i) => (
        <div key={i} className="card">
          <img src={img} />
          <h3>Title</h3>
          <p>Line 1</p>
          <p>Line 2</p>
          <p>Line 3</p>
        </div>
      ))}
    </div>
  );
}

export default Hero;