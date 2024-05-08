import React from "react";
import "./testimonials.css";
import { testimonials } from "../../data";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h1>Testimonials</h1>
      <p className="lead">
        Hear what our satisfied customers have to say about their experience
        with our Smart Home Application.
      </p>
      <div className="container testimonials__container">
        {testimonials.map((testimonial) => {
          const { id, review, photo, name, profession } = testimonial;
          return (
            <article className="testimonial" key={id}>
              <p>{review}</p>
              <div className="testimonial__client">
                <div className="avatar">
                  <img src={photo} alt="Avatar" />
                </div>
                <div className="testimonial__work">
                  <p>
                    <b>{name}</b>
                  </p>
                  <small>{profession}</small>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
