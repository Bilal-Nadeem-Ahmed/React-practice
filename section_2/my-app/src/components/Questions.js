import React, { useState } from "react";

const Questions = ({ questions, setScore, score }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleButtonClick = (isCorrect) => {
    // adds up the correct answers
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  return (
    <>
      <div className="question-section">
        <div className="question-text">
          <h1>{questions[currentQuestion].question}</h1>
        </div>

        <div className="question-count">
          <h2>
            Question {currentQuestion + 1} /{questions.length}
          </h2>
        </div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].options.map((answerOption) => (
          <button onClick={() => handleButtonClick(answerOption.isCorrect)}>
            {answerOption.text}
          </button>
        ))}
      </div>
    </>
  );
};

export default Questions;
