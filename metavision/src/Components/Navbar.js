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
        <div className={`menuIcon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <ul className="NavbarList ">
          <li>
            <NavLink exact to="/" activeclassname="active" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" activeclassname="active" onClick={closeMenu}>
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/Product" activeclassname="active" onClick={closeMenu}>
              Products & Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/Review" activeclassname="active" onClick={closeMenu}>
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/Blog" activeclassname="active" onClick={closeMenu}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" activeclassname="active" onClick={closeMenu}>
              Contact us
            </NavLink>
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
              <NavLink exact to="/" activeclassname="active" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" activeclassname="active" onClick={closeMenu}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/Project" activeclassname="active" onClick={closeMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/Facilities" activeclassname="active" onClick={closeMenu}>
                Facilities
              </NavLink>
            </li>
            <li>
              <NavLink to="/Reviews" activeclassname="active" onClick={closeMenu}>
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink to="/Gallery" activeclassname="active" onClick={closeMenu}>
                Gallery
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
