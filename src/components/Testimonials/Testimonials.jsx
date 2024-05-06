import React from "react";
import "./testimonials.css";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h1>Testimonials</h1>
      <p className="lead">
        Hear what our satisfied customers have to say about their experience
        with our Smart Home Application.
      </p>
      <div className="container testimonials__container">
        <article className="testimonial">
          <p>
            I've been using the Smart Home Application for a while now, and it's
            completely transformed how I interact with my home. Highly
            recommended!
          </p>
          <div className="testimonial__client">
            <div className="avatar">
              <img src={avatar1} alt="Avatar 1" />
            </div>
            <div className="testimonial__work">
              <p>
                <b>Diana Ayi</b>
              </p>
              <small>Musician</small>
            </div>
          </div>
        </article>
        <article className="testimonial">
          <p>
            The Smart Home Application has made managing my home a breeze. It's
            intuitive, efficient, and has truly simplified my life.
          </p>
          <div className="testimonial__client">
            <div className="avatar">
              <img src={avatar2} alt="Avatar 2" />
            </div>
            <div className="testimonial__work">
              <p>
                <b>Ernest Achiever</b>
              </p>
              <small>Web developer</small>
            </div>
          </div>
        </article>
        <article className="testimonial">
          <p>
            As a professional athlete, I need my home to be both comfortable and
            secure. The Smart Home Application delivers on both fronts, allowing
            me to focus on my game with peace of mind.
          </p>
          <div className="testimonial__client">
            <div className="avatar">
              <img src={avatar3} alt="Avatar 3" />
            </div>
            <div className="testimonial__work">
              <p>
                <b>Asamoah Gyan</b>
              </p>
              <small>Footballer</small>
            </div>
          </div>
        </article>
        <article className="testimonial">
          <p>
            I'm impressed by the level of customization and control offered by
            the Smart Home Application. It's tailored to my needs and has
            exceeded my expectations.
          </p>
          <div className="testimonial__client">
            <div className="avatar">
              <img src={avatar4} alt="Avatar 4" />
            </div>
            <div className="testimonial__work">
              <p>
                <b>Beatrice Aku</b>
              </p>
              <small>Politician</small>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
