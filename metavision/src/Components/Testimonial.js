import React, { useState } from "react";
import "../Style/Testimonial.css";
import blog4 from "../assets/img/blog1.svg";
import testi from "../assets/img/testi.svg";

const testimonialData = [
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        authorName: "Mrs. Saroj Gupta",
        authorRole: "Amardeep Designs Pvt. Ltd."
      },
      {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        authorName: "Mr. Rajesh Sharma",
        authorRole: "Tech Innovators Ltd."
      },
      {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        authorName: "Mrs. Saroj Gupta",
        authorRole: "Amardeep Designs Pvt. Ltd."
      },
      {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        authorName: "Mr. Rajesh Sharma",
        authorRole: "Tech Innovators Ltd."
      },

      {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        authorName: "Mr. Rajesh Sharma",
        authorRole: "Tech Innovators Ltd."
      },
];

const Testimonial = () => {
  const itemsPerGroup = 2;
  const totalGroups = Math.ceil(testimonialData.length / itemsPerGroup);

  const [activeGroup, setActiveGroup] = useState(0);

  const visibleTestimonials = testimonialData.slice(
    activeGroup * itemsPerGroup,
    (activeGroup + 1) * itemsPerGroup
  );

  return (
    <div>
      <div className="product testi">
        <h3>/ Our Review /</h3>
        <h1>What our clients say about us</h1>
        <p>
          We are a people Centric organization and we lay great emphasis on our
          relationship with our clients. We value the relationship and strive to
          constantly innovate and more upwards. Our solutions are customized as
          per the industry and client be it small, medium or large-scale
          enterprise.
        </p>

        <div className="testimonial">
          {visibleTestimonials.map((testimonial, index) => (
             <div className="testi-box" key={index}>
             <img src={testi} alt="" id="testi" />
             <div className="testimonial-main-box">
               <h2>{testimonial.text}</h2>
               <div className="testi-detail">
                 <div className="testi-img">
                   <img src={blog4} alt="" />
                 </div>
                 <div className="testi-name">
                   <h3>{testimonial.authorName}</h3>
                   <h5>{testimonial.authorRole}</h5>
                 </div>
               </div>
             </div>
             </div>
          ))}
        </div>

        <div className="circel">
          {Array.from({ length: totalGroups }, (_, i) => (
            <span
              className={activeGroup === i ? "active" : ""}
              onClick={() => setActiveGroup(i)}
              key={i}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
