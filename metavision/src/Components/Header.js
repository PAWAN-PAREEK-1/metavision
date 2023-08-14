import React from 'react'
import { NavLink } from 'react-router-dom'
// import logo from '/public/assets/img/logo.svg';
// import Navbar from './Navbar';
import "../Style/Header.css";
// import Button from './Button';
import call from '../assets/img/call.svg';
import mail from '../assets/img//@.svg';
// import location from '/public/assets/img/location.svg';
// import '../script/toogle.jsx';


const Header = () => {
  return (
    <header>
      <div className="head">
        <h1>Mon – Sun: 9.00 am – 8.00pm</h1>
        <div className="headmail">
          <div className="info">
            <a href="tel:1800 8899 757"><img src={call} alt="" /><h1>1800 8899 757</h1></a>
          </div>
          <hr />
          <div className="info">
            <a href=""><img src={mail} alt="" /><h1>info@triyomrealty.com</h1></a>
          </div>
          <hr />
          {/* <div className="info">
            <a href=""><img src={location} alt="" /> <h1>Ring Road, Surat</h1></a>
          </div> */}
        </div>

      </div>
      <div className="main-head">
      {/* <NavLink to={"/"}>
        <img src={logo} alt=""  id="logo"/>

      </NavLink> */}
      {/* <Navbar/> */}
      {/* <Button/> */}
      </div>



    </header>
  )
}

export default Header