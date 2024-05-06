import React from "react";
import "./header.css";
import heroImg from "../../assets/hero.png";
import appleLogo from "../../assets/Apple-logo.png";
import androidLogo from "../../assets/android.png";
import decorator1 from "../../assets/header-decorator1.png";
import decorator2 from "../../assets/header-decorator-2.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>
          Smart Home <br />
          Application
        </h1>
        <p className="lead">
          Welcome to our Smart Home Application! Explore a world of convenience
          and innovation where your home becomes smarter, safer, and more
          efficient. Discover how our cutting-edge technology seamlessly
          integrates into your lifestyle, offering you control and peace of mind
          like never before.
        </p>
        <div className="header__image">
          <img src={heroImg} alt="heroImg" />
        </div>
        <div className="cta">
          <a
            href="https://www.apple.com/app-store/"
            class="btn btn-primary"
            target="__blank"
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
      <div className="header__decorator-1">
        <img src={decorator2} alt="" />
      </div>
    </header>
  );
};

export default Header;
