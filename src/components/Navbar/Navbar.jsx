import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import "./navbar.css";

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
        <ul className={`nav__items ${isOpen ? "open" : ""}`}>
          <li>
            <a href="index.html" onClick={closeNavbar}>
              Home
            </a>
          </li>
          <li>
            <a href="index.html#about" onClick={closeNavbar}>
              About
            </a>
          </li>
          <li>
            <a href="index.html#testimonials" onClick={closeNavbar}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="index.html#faqs" onClick={closeNavbar}>
              Faqs
            </a>
          </li>
          <li>
            <a href="contact.html" onClick={closeNavbar}>
              Contact
            </a>
          </li>
        </ul>
        <a href="index.html" className="nav__logo">
          <h3>SmartHome</h3>
        </a>
        
        <div className="nav__signin-signup">
          <a href="#">Login</a>
          <a href="#" className="btn">
            Signup
          </a>
        </div>
        <button id="menu-btn" onClick={toggleNavbar}>
          {isOpen ? <IoMdClose /> : <MdOutlineMenu />}
        </button>
        <button id="close-btn" onClick={toggleNavbar}>
          <IoMdClose />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
