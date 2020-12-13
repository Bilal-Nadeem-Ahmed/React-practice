import React, { useState } from "react";

import "./App.css";
import questions from "./questions";

import Success from "./components/Success";
import Questions from "./components/Questions";

export default function App() {
  // used to display the score pannel at the end
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  return (
    <div className="app">
      {quizComplete ? (
        <Success score={score} maxScore={questions.length} />
      ) : (
        <Questions question={questions} />
      )}
    </div>
  );
}
