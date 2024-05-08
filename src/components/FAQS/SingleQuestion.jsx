import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const SingleQuestion = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  console.log("showInfo state:", showInfo);

  return (
    <article className={`faq ${showInfo ? "open" : ""}`} key={id}>
      <span className="faq__icon" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? <FaMinus /> : <FaPlus />}
      </span>
      <div className="faq__question-answer">
        <h4 className="faq__question">{title}</h4>
        {showInfo && <p className="faq__answer">{info}</p>}
      </div>
    </article>
  );
};

export default SingleQuestion;
