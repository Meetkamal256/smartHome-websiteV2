import React from "react";
import "./faqs.css";
import { FaPlus } from "react-icons/fa";

const Faqs = () => {
  return (
    <section id="faqs">
      <h1>FAQS</h1>
      <div className="container faqs__container">
        <article className="faq ">
          <span className="faq__icon">
            <FaPlus />
          </span>
          <div className="faq__question-answer">
            <h4 className="faq__question">How does this work?</h4>
            <p className="faq__answer">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum, vel.
            </p>
          </div>
        </article>
        <article className="faq">
          <span className="faq__icon">
            <FaPlus />
          </span>
          <div className="faq__question-answer">
            <h4 className="faq__question">How does this work?</h4>
            <p className="faq__answer">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum, vel.
            </p>
          </div>
        </article>
        <article className="faq">
          <span className="faq__icon">
            <FaPlus />
          </span>
          <div className="faq__question-answer">
            <h4 className="faq__question">How does this work?</h4>
            <p className="faq__answer">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum, vel.
            </p>
          </div>
        </article>
        <article className="faq">
          <span className="faq__icon">
            <FaPlus />
          </span>
          <div className="faq__question-answer">
            <h4 className="faq__question">How does this work?</h4>
            <p className="faq__answer">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum, vel.
            </p>
          </div>
        </article>
        <article className="faq">
          <span className="faq__icon">
            <FaPlus />
          </span>
          <div className="faq__question-answer">
            <h4 className="faq__question">How does this work?</h4>
            <p className="faq__answer">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum, vel.
            </p>
          </div>
        </article>
        <article className="faq">
          <span className="faq__icon">
            <FaPlus />
          </span>
          <div className="faq__question-answer">
            <h4 className="faq__question">How does this work?</h4>
            <p className="faq__answer">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum, vel.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Faqs;
