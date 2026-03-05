import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.jpg";
import png1 from "./graph.png";
import png2 from "./graph.png";
import png3 from "./graph.png";
import png4 from "./graph.png";


function Gallery() {
  return (
    <div>
      <img src={img1} alt="img1"  />
      <img src={img2} alt="img2"  />
      <img src={img3} alt="img3"  />
      <img src={png1} alt="png1"  />
      <img src={png2} alt="png2"  />
      <img src={png3} alt="png3"  />
      <img src={png4} alt="png4"  />
    </div>
  );
}

export default Gallery;