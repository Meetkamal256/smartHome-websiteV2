import React from "react";
import "./header.css";
import heroImg from "../../assets/hero.png";
import appleLogo from "../../assets/Apple-logo.png";
import androidLogo from "../../assets/google playstore.png";
import decorator1 from "../../assets/header-decorator1.png";
import decorator2 from "../../assets/header-decorator-2.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1 className="header__title">
          Smart Home <br />
          Application
        </h1>
        <p className="lead">
          Dive into the future of home automation with our innovative Smart Home
          Application. Unlock unparalleled convenience, safety, and efficiency
          as our cutting-edge technology seamlessly integrates into your daily
          life, revolutionizing the way you interact with your home.
        </p>
        <div className="header__image">
          <img src={heroImg} alt="heroImg" />
        </div>
        <div className="cta">
          <a
            href="https://www.apple.com/app-store/"
            class="btn btn-primary"
            target="__blank"
            className="btn btn-primary"
          >
            <div className="logo">
              <img src={appleLogo} alt="apple logo" />
            </div>
            <span>
              <small>Download on the</small>
              <h4>App Store</h4>
            </span>
          </a>
          <a href="#" class="btn btn-primary" target="__blank">
            <div className="logo">
              <img src={androidLogo} alt="apple logo" />
            </div>
            <span>
              <small>GET IT ON</small>
              <h4>Google Play</h4>
            </span>
          </a>
        </div>
        
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
  );
};

export default Header;
