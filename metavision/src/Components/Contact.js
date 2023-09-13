import React from 'react'
import "../Style/Contact.css";

const Contact = () => {
  return (
    <div>
        <div className="contact">
            <div className="contact-left cls">
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
                    <div className="btn-about">
                        Submit
                    </div>
                </a>







            </div>
            <div className="contact-right">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.118679413276!2d72.76602817513262!3d21.147674780531613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be052787c8e0cd3%3A0xd9e8cba8b329cc64!2sSNS%20Atria!5e0!3m2!1sen!2sin!4v1692122966144!5m2!1sen!2sin"></iframe>

            </div>
        </div>
    </div>
  )
}

export default Contact