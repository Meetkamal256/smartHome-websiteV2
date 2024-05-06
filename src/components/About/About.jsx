import React from "react";
import "./about.css";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";

const About = () => {
  return (
    <section id="about">
      <h1 className="about__title">About Us</h1>
      <div className="container">
        <article className="about__article">
          <div className="about__image">
            <img src={about1} alt="Mobile phone showing energy" />
          </div>
          <div className="about__content">
            <h2 className="about__article-title">
              Smart Home's Energy Management
            </h2>
            <p>
              Our Smart Home Application empowers you to efficiently manage
              energy consumption like never before. Take control of your home's
              energy usage and save money while reducing your environmental
              footprint.
            </p>
          </div>
        </article>
        <article className="about__article">
          <div className="about__content">
            <h2 className="about__article-title">Smart Temperature Control</h2>
            <p>
              Experience optimal comfort in every room with our Smart
              Temperature Control feature. Adjust the temperature to your liking
              effortlessly, ensuring a cozy environment year-round while
              maximizing energy efficiency.
            </p>
          </div>
          <div className="about__image">
            <img src={about2} alt="Mobile phone showing temperature control" />
          </div>
        </article>
        <article className="about__article">
          <div className="about__image">
            <img src={about3} alt="Mobile phone showing room control" />
          </div>
          <div className="about__content">
            <h2 className="about__article-title">Smart Room Automation</h2>
            <p>
              Transform your living space into a personalized sanctuary with our
              Smart Room Automation feature. From lighting to security,
              effortlessly control every aspect of your home environment for
              ultimate comfort and convenience.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
