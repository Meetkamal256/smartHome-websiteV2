import React, { useState } from "react";
import "./faqs.css";
import data from "../data";
import SingleQuestion from "./SingleQuestion";

const Faqs = () => {
  const [questions] = useState(data);
  return (
    <section id="faqs">
      <h1>FAQs</h1>
      <div className="container faqs__container">
        {questions.map((question) => {
          const { id, title, info } = question;
          return <SingleQuestion key={id} {...question} />;
        })}
      </div>
    </section>
  );
};

export default Faqs;
