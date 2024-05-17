import React from "react";
import "./footer.css";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { pageLinks } from "../../data";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__1">
          <a href="index.html" className="footer__logo">
            <h3>SmartHome</h3>
          </a>
          <p> Revolutionize your living experience with SmartHome.</p>
          <div className="footer__subscribe">
            <input type="email" placeholder="Enter Email" required />
            <button type="submit">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="footer__2">
          <h4>Permalinks</h4>
          <ul className="permalinks">
            {pageLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  <a href={href}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer__3">
          <h4>Privacy</h4>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and condition</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer__4">
          <h4>Contact Us</h4>
          <p>
            +01 234 888 8888 <br />
            meetkamal256@gmail.com
          </p>
          <ul className="footer__socials">
            <li>
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/apple">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">Copyright &copy; 2024</div>
    </footer>
  );
};

export default Footer;
