import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.svg';
import Navbar from './Navbar.js';
import "../Style/Header.css";
// import Button from './Button';
import call from "../assets/img/call.svg";
import mail from "../assets/img//@.svg";
// import '../script/toogle.jsx';
import facebook from "../assets/img/facbook.svg";
import be from "../assets/img/be.svg";
import git from "../assets/img/git.svg";
import twitter from "../assets/img/twitter.svg";

const Header = () => {
  return (
    <header>
      <div className="head">
        <div className="heading">
         <a href=""><img src={facebook} alt="" /></a>
         <a href=""><img src={twitter} alt="" /></a>
         <a href=""><img src={be} alt="" /></a>
         <a href=""> <img src={git} alt="" /></a>
        </div>

        <div className="headmail">
          <div className="info info1">
            <a href="">
              <img src={mail} alt="" />
              <h1>metavision@ gmali.com</h1>
            </a>
          </div>
          <div className="info">
            <a href="tel:1800 8899 757">
              <img src={call} alt="" />
              <h1>+91 90295 48001</h1>
            </a>
          </div>
        </div>
      </div>

      <div className="main-head">
     <NavLink>
        <img src={logo} alt=""  id="logo"/>
        </NavLink>
        <Navbar/>
        <a href=""> <div className="btn">
         GET Estimate
        </div></a>
      </div>
    </header>
  );
};

export default Header;
