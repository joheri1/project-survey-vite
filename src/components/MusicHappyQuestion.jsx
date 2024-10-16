//Does music make you happy? Radio button- YES absolutely, NO I like the silence" 2

import { useState } from "react";

const options = [
  'yes',
  'no'
]

export const MusicHappyQuestion = () => {
  const [isMusicHappy, setIsMusicHappy] = useState("");


  return (
    <div>
      <h1>2</h1>
      <p>Does music make you happy?</p>
      <form>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option}
              onChange={(event) => setIsMusicHappy(event.target.value)}
              checked={isMusicHappy === option}
            />
            {option === 'yes' ? 'YES absolutely' : 'NO I like the silence'}
          </label>
        ))}
      </form>
    </div>
  );
};