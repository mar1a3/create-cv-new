import React, { useState } from 'react';
import { faq } from '../../components/constants/index';
import './style.css';

export const FaqItem = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (current) => {
    if (current === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(current);
    }
  };

  return (
    <div className="faq">
      {faq.map((question) => (
        <div key={question.id} className="faq-question-container">
          <div className="faq-question">
            <p className="question-text">{question.question}</p>
            <img
              className={`openimg ${activeIndex === question.id ? 'active' : ''}`}
              src="images/down-arrow.png"
              alt="Open/Close"
              onClick={() => toggleAnswer(question.id)}
            />
          </div>
          <div
            className={`answer-box ${activeIndex === question.id ? 'active' : ''}`}
          >
            <p className="answer-text">{question.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
