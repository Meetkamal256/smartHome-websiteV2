import React from "react";
import "./header.css";
import heroImg from "../../assets/hero.png";
import decorator1 from "../../assets/header-decorator1.png";
import decorator2 from "../../assets/header-decorator-2.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import CtaBtn from "./CtaBtn";

const Header = () => {
  return (
    <div className="section" id="header">
      <header>
        <div className="container header__container">
          <h1 className="header__title">
            Smart Home <br />
            Application
          </h1>
          <p className="lead">
            Dive into the future of home automation with our innovative Smart
            Home Application. Unlock unparalleled convenience, safety, and
            efficiency as our cutting-edge technology seamlessly integrates into
            your daily life, revolutionizing the way you interact with your
            home.
          </p>
          <div className="header__image">
            <img src={heroImg} alt="heroImg" />
          </div>
          <CtaBtn />

          <div className="header__socials">
            <a href="https://www.facebook.com">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/apple">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="header__decorator-1">
          <img src={decorator1} alt="" />
        </div>
        <div className="header__decorator-2">
          <img src={decorator2} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
