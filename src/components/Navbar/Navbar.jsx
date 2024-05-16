import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import "./navbar.css";
import { pageLinks } from "../../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          <h3>SmartHome</h3>
        </Link>

        <ul className={`nav__items ${isOpen ? "open" : ""}`}>
          {pageLinks.map((link) => {
            const { id, path, text, isExternal } = link;
            return (
              <li key={id}>
                {isExternal ? (
                  <NavLink to={path} onClick={closeNavbar}>
                    {text}
                  </NavLink>
                ) : (
                  <ScrollLink
                    to={path}
                    smooth={true}
                    duration={500}
                    offset={-150} // Adjust this offset to account for the height of your fixed navbar
                    onClick={closeNavbar}
                  >
                    {text}
                  </ScrollLink>
                )}
              </li>
            );
          })}
        </ul>
        
        <div className="nav__signin-signup">
          <a href="#">Login</a>
          <a href="#" className="btn">
            Signup
          </a>
        </div>
        
        <button id="menu-btn" onClick={toggleNavbar}>
          {isOpen ? <IoMdClose /> : <MdOutlineMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
