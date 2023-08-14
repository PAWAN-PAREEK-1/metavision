import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style/Header.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <div>
      <nav>
        <div
          className={`menuIcon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <ul className="NavbarList ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About us</NavLink>
          </li>
          <li>
            <NavLink to="/Product">Products & Services</NavLink>
          </li>
          <li>
            <NavLink to="/Review">Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/Blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact us</NavLink>
          </li>

        </ul>
      </nav>
      {menuOpen && (
        <div className="mobileNav">
          <div className="closebtn" onClick={() => setMenuOpen(false)}>
          <img src="../public/assets/img/close.svg" alt="" />
          </div>
          <ul>
            <li>
              <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/About"onClick={closeMenu}>About us</NavLink>
            </li>
            <li>
              <NavLink to="/Project" onClick={closeMenu}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/Facilities" onClick={closeMenu}>Facilities</NavLink>
            </li>
            <li>
              <NavLink to="/Reviews" onClick={closeMenu}>Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/Gallery" onClick={closeMenu}>Gallery</NavLink>
            </li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
