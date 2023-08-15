import React from "react";
import "../Style/MetaVision.css";
import "../Style/Global.css";
import meta1 from "../assets/img/m1.svg";
import meta2 from "../assets/img/m2.svg";
import meta3 from "../assets/img/m3.svg";
import meta4 from "../assets/img/m4.svg";
import meta5 from "../assets/img/m5.svg";
import meta6 from "../assets/img/m6.svg";
import meta7 from "../assets/img/m7.svg";

const MetaVision = () => {
  return (
    <div>
      <div className="product meta">
        <h3>/ Metavision /</h3>
        <h1>Why Metavision</h1>
        <p>
          We are 3 STAR certified partners of Tally. A partner of Tally only
          receives 3 STAR rating when they maintain certain standards that are
          judged on strict criteria of product expertise and staff knowledge.
        </p>

        <div className="metavision">
          <div className="meta-box">
            <img src={meta1} alt="" />
            <h3>
              Tailor-made <br />
              solutions
            </h3>
          </div>
          <div className="meta-box">
            <img src={meta2} alt="" />
            <h3>
            Increased <br /> productivity
            </h3>
          </div>
          <div className="meta-box">
            <img src={meta3} alt="" />
            <h3>
            Timely
            <br /> Delivery
            </h3>
          </div>
          <div className="meta-box">
            <img src={meta4} alt="" />
            <h3>
            Flexible & Cost-<br />Efficient Solutions
            </h3>
          </div>
          <div className="meta-box">
            <img src={meta5} alt="" />
            <h3>
            Proficient <br /> Team
            </h3>
          </div>
          <div className="meta-box">
            <img src={meta6} alt="" />
            <h3>
            Seamless <br /> Integration
            </h3>
          </div>
          <div className="meta-box">
            <img src={meta7} alt="" />
            <h3>
            24X7 Customer <br /> Support
            </h3>
          </div>
          <div className="meta-box">
            <img src={meta1} alt="" />
            <h3>
            Adequate <br /> Infrastructure
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MetaVision;
