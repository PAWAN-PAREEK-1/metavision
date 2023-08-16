import React from 'react';
import '../Style/Footer.css';
import facebook from "../assets/img/fface.svg";
import instagram from "../assets/img/finsta.svg";
import whatsapp from "../assets/img/fwhat.svg";
import logo from "../assets/img/logo.svg";
import location from "../assets/img/location.svg";
import call from "../assets/img/fcall.svg";
import mail from "../assets/img/mail.svg";
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-main">


      <div className="column column-foot">
        <img src={logo} alt="Logo" className="logo" />
        <h3>Follow</h3>
        <div className="social-icons">
         <a href=""> <img src={facebook} alt="Facebook" className="social-icon" /></a>
         <a href=""> <img src={whatsapp} alt="Twitter" className="social-icon" /></a>
         <a href="">  <img src={instagram} alt="Instagram" className="social-icon" /></a>
        </div>
      </div>
      <div className="column">
        <h4>Address</h4>
      <a href=""> <h5><img src={location} alt="" />A8, Ganesh Industrial Estate, Visheswar Nagar, Near Heera Panna Estate, Virwani, Goregaon East, Mumbai 400063.</h5></a>
      <a href=""> <h5><img src={location} alt="" />412 4th floor. Rajhans Bldg, Near Nirmal Hospital, Ring Road, Surat</h5></a>
      </div>
      <div className="column">
        <h4>Contact</h4>
        <a href=""> <h5><img src={mail} alt="" />bhavin.shah@metavisiontechnology.com</h5></a>
        <a href=""> <h5><img src={mail} alt="" />support@metavisiontechnology.com</h5></a>
        <a href=""> <h5><img src={call} alt="" />+91 95949 49487</h5></a>
        <br />

        <a href=""> <h5><img src={call} alt="" />+91 96531 82561</h5></a>
        </div>
      <div className="column">
        <h4>Join a Newsletter</h4>
        <label htmlFor="">Your Email</label>
        <br />
        <input type="email" placeholder="Enter Your Email" className="newsletter-input" />
        <button className="newsletter-button">Subscribe</button>
      </div>
      </div>
      <hr />
      <h2 id='copy'>Copyright © 2022 Metavision Technology | Powered by ATF</h2>
    </footer>

  );
};

export default Footer;
