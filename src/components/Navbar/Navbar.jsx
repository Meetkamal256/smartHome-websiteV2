import React from "react";
import "./navbar.css";

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
          <a href="#">Sighup</a>
        </div>
        <button className="menu-btn"></button>
        <button className="close-btn"></button>
      </div>
    </nav>
  );
};

export default Navbar;