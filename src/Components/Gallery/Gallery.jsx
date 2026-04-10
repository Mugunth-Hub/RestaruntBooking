import "./Gallery.css";

import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.jpg";

function Gallery() {
  const images = [img1, img2, img3, img1, img2, img3, img1, img2];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;