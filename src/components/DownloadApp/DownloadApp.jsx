import React from "react";
import "./downloadApp.css";
import CtaBtn from "../Header/CtaBtn";
import downloadAppImg from "../../assets/app.png";

const DownloadApp = () => {
  return (
    <section id="downloadApp">
      <div className="container downloadApp__container">
        <div className="downloadApp__content">
          <h1>
            Download <br />
            App
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
            placeat?
          </p>
          <CtaBtn />
        </div>
        <div className="downloadApp__image">
          <img src={downloadAppImg} />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
