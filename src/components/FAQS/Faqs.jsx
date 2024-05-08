import React from "react";
import "./faqs.css";
import { questions } from "../../data";
import SingleQuestion from "./SingleQuestion";

const Faqs = () => {
  return (
    <section id="faqs">
      <h1>FAQs</h1>
      <div className="container faqs__container">
        {questions.map((question) => {
          const { id } = question;
          return <SingleQuestion key={id} {...question} />;
        })}
      </div>
    </section>
  );
};

export default Faqs;
