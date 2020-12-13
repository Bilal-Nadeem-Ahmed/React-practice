import React from "react";

const Success = ({ score, maxScore }) => {
  return (
    <div className="score-section">
      <p>Congratulations!</p>
      <br></br>
      <p>
        You scored {score} out of {maxScore}
      </p>
    </div>
  );
};

export default Success;
