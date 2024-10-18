/* eslint-disable react/prop-types */

export const MoodQuestion = ({ updateFormData, value }) => {
  const handleMoodQuestionChange = (event) => {

    updateFormData("moodQuestion", event.target.value);
  }

  return (
    <div>
      <div className="question-container">
        <h1>1.</h1>
        <p>What is your favorite mood-boosting song?</p>
      </div>
      <div className="answer-container">
        <input
          type="text"
          value={value}
          onChange={handleMoodQuestionChange}
        />
      </div>
    </div>
  );
};




