/* eslint-disable react/prop-types */

/**
 * This component is used to collect and update the user's comfort food in a multi-step form.
 */

export const ComfortFood = ({ value, updateFormData }) => {
  const handleComfortFoodChange = (e) => {
    // 'e' is the event object. 'e.target' refers to the input element that triggered the event.
    // 'e.target.value' gets the current value of the input field.
    updateFormData("comfortFood", e.target.value);
  }

  return (
    <div className="border-box">
      <label>What is your comfort food?</label>
      <input type="text" value={value} onChange={handleComfortFoodChange} />
    </div>
  )
}

export default ComfortFood

/**
* Summary:
* This component displays an input field for the user's comfort food, and the user's input is updated through the `updateFormData` function.
*/
