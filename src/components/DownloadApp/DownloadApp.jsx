import React from "react";
import "./downloadApp.css";
import CtaBtn from "../Header/CtaBtn";
import downloadAppImg from "../../assets/app.png";

const DownloadApp = () => {
  return (
    <div className="container downloadApp__container">
      <div className="downloadApp__content">
        <h1>
          Download <br />
          Our App
        </h1>
        <p>
          Get the ultimate smart home experience by downloading our app today!
          Take control of your home from anywhere, at any time.
        </p>
        <CtaBtn
          style={{
            justifyContent: "start",
            marginTop: "2rem",
            maxWidth: "1024px",
            flexDirection: "column",
            gap: "1rem",
            margin: "0 auto",
          }}
        />
      </div>
      <div className="downloadApp__image">
        <img src={downloadAppImg} alt="Download App" />
      </div>
    </div>
  );
};

export default DownloadApp;
