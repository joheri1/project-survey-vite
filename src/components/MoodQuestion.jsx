import { useState } from "react";

export const MoodQuestion = () => {
  const [mood, setMood] = useState("Write your answer here");

  return (
    <div>
      <h1>1</h1>
      <p>What´s your favourite mood boosting activity?</p>
      <input
        type="text"
        onChange={(event) => setMood(event.target.value)}
        value={mood}
      />
      {/* <p>{mood}</p> */}
    </div>
  );
};

