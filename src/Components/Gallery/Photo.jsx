import img1 from "./Photo/img1.jpeg";
import img2 from "./Photo/img2.jpeg";
import img3 from "./Photo/img3.jpg";
import img4 from "./Photo/Logo.jpeg";


function Photo() {
  return (
    <div className="gallery">
      <img src={img1} />
      <img src={img2} />
      <img src={img3} />
      <img src={img4} />
    </div>
  );
}

export default Photo;