import React from 'react'
import "../Style/AboutUs.css"
import aboutsec from "../assets/img/aboutsec.png";
import help from "../assets/img/help.png";

const AboutUs = () => {
  return (
    <div className='about'>

        <div className="mobile-about">
            <h4>/ About Us /</h4>
                <h3>UNLOCK THE TRUE POTENTIAL OF YOUR BUSINESS WITH METAVISION TECHNOLOGY</h3>

            </div>
        <div className="about-left">
            <img src={aboutsec} alt="" />
            <p className='mobile-about'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        </div>
        <div className="about-right">
            <div className="desktop-about">

            <h4>/ About Us /</h4>
                <h3>UNLOCK THE TRUE POTENTIAL OF YOUR BUSINESS WITH METAVISION TECHNOLOGY</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>


                <a href="">
                    <div className="btn-about  desktop-about">
                        Read More
                    </div>
                </a>
                <div className="help">
                    <img src={help} alt="" />
                    <div className="help-right">
                        <h3>Get Instant Professional Advice</h3>
                       <a href=""> <h4>Ready To Help: <span>+123 456 789</span></h4></a>

                    </div>

                </div>
                <a href="">
                    <div className="btn-about mobile-about ">
                        Read More
                    </div>
                </a>
        </div>

    </div>
  )
}

export default AboutUs