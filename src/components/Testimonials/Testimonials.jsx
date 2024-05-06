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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab officia
        tempora ad dolores veniam quo?
      </p>
      <div className="container testimonials__container">
        <article className="testimonial">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            praesentium esse ducimus.
          </p>
          <div className="testimonial__client">
            <div className="avatar">
              <img src={avatar1} alt="" />
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            praesentium esse ducimus.
          </p>
          <div className="testimonial__client">
            <div className="avatar">
              <img src={avatar2} alt="" />
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            praesentium esse ducimus.
          </p>
          <div className="testimonial__client">
            <div className="avatar">
              <img src={avatar3} alt="" />
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            praesentium esse ducimus.
          </p>
          <div className="testimonial__client">
            <div className="avatar">
              <img src={avatar4} alt="" />
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
