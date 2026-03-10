import "./Mid2.css";
import user1 from "../Gallery/Aimg6.jpg";
import user2 from "../Gallery/Aimg6.jpg";
import user3 from "../Gallery/Aimg6.jpg";

function Mid2() {

const reviews = [
{
img: user1,
text: "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout."
},
{
img: user2,
text: "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout."
},
{
img: user3,
text: "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout."
},
{
img: user1,
text: "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout."
},
{
img: user2,
text: "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout."
},
{
img: user3,
text: "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout."
}
];

return (
<section className="testimonial-section">

<div className="testimonial-left">

<button className="testimonial-btn">What Our Clients Say</button>

<h2>
TRUSTED BY MANY,<br/>
LOVED BY ALL
</h2>

<p>
Our clients’ success stories reflect our commitment to excellence.
</p>

</div>


<div className="testimonial-grid">

{reviews.map((item,index)=>(
<div className="testimonial-card" key={index}>

<div className="testimonial-stars">
★★★★★
</div>

<div className="testimonial-user">
<img src={item.img} alt="user"/>
</div>

<p>{item.text}</p>

</div>
))}

</div>

</section>
);
}

export default Mid2;