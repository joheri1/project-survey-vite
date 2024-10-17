import { useState } from "react";

export const MoodQuestion = () => {
  const [mood, setMood] = useState("Write your answer here");

  return (
    <div>
      <div className="question-container">
        <h1>1</h1>
        <p>What's your favorite mood-boosting song?</p>
      </div>
      <div className="answer-container">
        <input
          type="text"
          onChange={(event) => setMood(event.target.value)}
          value={mood}
        />
      </div>
    </div>
  );
};

