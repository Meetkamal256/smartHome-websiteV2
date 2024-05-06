import React from "react";
import appleLogo from "../../assets/Apple-logo.png";
import androidLogo from "../../assets/google playstore.png";

const CtaBtn = () => {
  return (
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
  );
};

export default CtaBtn;
