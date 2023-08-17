import React from "react";
import "../Style/AboutUs.css";
import aboutsec from "../assets/img/aboutsec.png";
import help from "../assets/img/help.png";

const AboutUs = () => {
  return (
    <div className="about-sec">
      <h6>
        UNLOCK THE TRUE POTENTIAL OF YOUR BUSINESS WITH METAVISION TECHNOLOGY
      </h6>
      <div className="about about-page">
        <div className="about-page2">
        <div className="mobile-about">
          <h4>/ About Us /</h4>
          <h3>
            UNLOCK THE TRUE POTENTIAL OF YOUR BUSINESS WITH METAVISION
            TECHNOLOGY
          </h3>
        </div>
        <div className="about-left">
          <img src={aboutsec} alt="" />
          <p className="mobile-about">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
        </div>
        <div className="about-right">
          <div className="desktop-about">
            <h3>THE MOST TRUSTED PROVIDER OF CUSTOMIZED BUSINESS SOLUTIONS</h3>
            <p>
              The core team at Metavision have been expert business problem
              solvers for all our clients and have held their hand while
              providing them with customized solutions improving business
              outcomes by improving decision making abilities. We endeavor to
              bring people’s innovative ideas and convert them into reality as
              business solutions. Our team of experts understand our clients’
              requirements and customize solutions that can seamlessly integrate
              into business resulting in improved productivity and high return
              on investment. 
            </p>
          </div>

          <div className="help">
            <img src={help} alt="" />
            <div className="help-right">
              <h3>Get Instant Professional Advice</h3>
              <a href="">
                {" "}
                <h4>
                  Ready To Help: <span>+123 456 789</span>
                </h4>
              </a>
            </div>
          </div>
          <a href="">
            <div className="btn-about mobile-about ">Read More</div>
          </a>
        </div>

      </div>
      <div className="mission">
        <div className="vision">
            <h1>OUR VISSION</h1>
            <p>To help our clients derive sizeable value from their businesses using state-of-art Indian Global Software products, while constantly innovating to drive client’s performance.</p>
        </div>
        <div className="vision">
            <h1>OUR MISSION</h1>
            <p>To leverage our capacity and resources to innovate, create and deliver creative customize products and services, and be helpful and stay connected with our clients.</p>
        </div>
      </div>
      </div>

    </div>
  );
};

export default AboutUs;
