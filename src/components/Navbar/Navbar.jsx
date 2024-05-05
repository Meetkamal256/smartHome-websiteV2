import React from "react";
import "./navbar.css";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <ul className="nav__items">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="index.html#about">About</a>
          </li>
          <li>
            <a href="index.html#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="index.html#faqs">Faqs</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
        <a href="index.html" className="nav__logo">
          <h3>SmartHome</h3>
        </a>

        <div className="nav__signin-signup">
          <a href="#">Login</a>
          <a href="#">Signup</a>
        </div>
        <button className="menu-btn">
          <MdOutlineMenu />
        </button>
        <button className="close-btn">
          <IoMdClose />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
