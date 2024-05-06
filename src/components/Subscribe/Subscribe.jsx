import React from "react";
import "./subscribe.css";

const Subscribe = () => {
  return (
    <section id="subscribe">
      <div className="container subscribe__container">
        <div className="subscribe__text">
          <h2>Subscribe to Stay Updated</h2>
          <p>
            Don't miss out on the latest news and updates! Subscribe now to
            receive notifications about our products and services.
          </p>
        </div>
        <a href="#" className="btn subscribe__btn">
          Get Updates
        </a>
      </div>
    </section>
  );
};

export default Subscribe;
