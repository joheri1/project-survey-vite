/* eslint-disable react/prop-types */

/**
 * This component is used to collect and update the user's comfort food in a multi-step form.
 */

export const ComfortFood = ({ value, updateFormData }) => {
  const handleComfortFoodChange = (event) => {

    updateFormData("comfortFood", event.target.value);
  }

  return (
    <div>
      <div className="question-container">
        <h1>5</h1>
        <p>What is your comfort food?</p>
      </div>
      <div className="answer-container">
        <input
          type="text"
          value={value}
          onChange={handleComfortFoodChange} />
      </div>

    </div>
  );
};

export default ComfortFood

/**
* Summary:
* This component displays an input field for the user's comfort food, and the user's input is updated through the `updateFormData` function.
*/
