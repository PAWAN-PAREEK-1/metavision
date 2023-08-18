import React, { lazy, Suspense } from "react";
import "../Style/Global.css";
import "../Style/Contact.css";
import bigline from "../assets/img/bigline.svg";
import herobg from "../assets/img/herobg.svg";
const Loading = lazy(() => import("../Components/Loading"));
const Header = lazy(() => import('../Components/Header.js'));






const Contacts = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <Header/>
      <div>
        <div className="hero-all">
          <h4>
            {" "}
            <img src={bigline} alt=""  />
            CONTACT US
          </h4>
          <img src={herobg} alt="" id="hero-bg"/>
        </div>

      </div>


      <div>
        <div className="contact contact-page">
          <div className="contact-left2">
            <div className="contact-left ">
                <h1>Get in <span>Touch</span> </h1>
                <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                <div className="con-input">
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="tel" placeholder='Phone Number' />
                <input type="text" placeholder='Subject' />
                <textarea name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                </div>
                <a href="">
                    <div className="btn-about btn-contact">
                        Submit
                    </div>
                </a>







            </div>
            </div>
            <div className="contact-right ">
            <iframe className="iframe2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.118679413276!2d72.76602817513262!3d21.147674780531613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be052787c8e0cd3%3A0xd9e8cba8b329cc64!2sSNS%20Atria!5e0!3m2!1sen!2sin!4v1692122966144!5m2!1sen!2sin"></iframe>
                <div className="address">
                  <div className="add">
                    <h2>Mumbai Address</h2>
                    <p>A8, Ganesh Industrial Estate, Visheswar Nagar, Near Heera Panna Estate, Virwani, Goregaon East, Mumbai 400063.</p>
                  </div>
                  <div className="add">
                    <h2>Surat Address</h2>
                    <p>412 4th floor. Rajhans Bldg, Near Nirmal Hospital, Ring Road, Surat</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </Suspense>
  );
};

export default Contacts  ;
