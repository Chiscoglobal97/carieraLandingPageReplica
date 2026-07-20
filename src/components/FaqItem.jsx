import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import "./FaqItem.css";

function FaqItem({ question, answer }) {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);

  function toggleAnswer() {
    setIsAnswerOpen((previousState) => !previousState);
  }

  return (
    <article className="faqItem">
      <h3 className="faqQuestionHeading">
        <button
          className="faqQuestionButton"
          type="button"
          aria-expanded={isAnswerOpen}
          onClick={toggleAnswer}
        >
          <span className="faqQuestionContent">
            {isAnswerOpen ? (
              <FiMinus className="faqIcon" aria-hidden="true" />
            ) : (
              <FiPlus className="faqIcon" aria-hidden="true" />
            )}

            <span className="faqQuestion">{question}</span>
          </span>
        </button>
      </h3>

      <div
        className={`faqAnswerContainer ${
          isAnswerOpen ? "faqAnswerContainerOpen" : ""
        }`}
      >
        <p className="faqAnswer">{answer}</p>
      </div>
    </article>
  );
}

export default FaqItem;