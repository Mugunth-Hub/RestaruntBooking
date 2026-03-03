import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.jpg";

function Gallery() {
  return (
    <div>
      <img src={img1} alt="img1"  />
      <img src={img2} alt="img2"  />
      <img src={img3} alt="img3"  />
    </div>
  );
}

export default Gallery;