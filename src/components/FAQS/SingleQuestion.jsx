import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const SingleQuestion = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);


  return (
    <article
      className={`faq ${showInfo ? "open" : ""}`}
      key={id}
      onClick={() => setShowInfo(!showInfo)}
    >
      <span className="faq__icon">{showInfo ? <FaMinus /> : <FaPlus />}</span>
      <div className="faq__question-answer">
        <h4 className="faq__question">{title}</h4>
        {showInfo && <p className="faq__answer">{info}</p>}
      </div>
    </article>
  );
};

export default SingleQuestion;
