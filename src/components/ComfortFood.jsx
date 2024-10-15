/* eslint-disable react/prop-types */
/**
 * This component is used to collect and update the user's comfort food in a multi-step form.
 */

export const ComfortFood = ({ value, updateFormData }) => {
    // Function to handle user input and update the form's comfort food field
    const handleComfortFoodChange = (e) => {
      // Call updateFormData to update the "comfort-food" field with the input's current value
      updateFormData("comfort-food", e.target.value)
    }
  
    return (
      <div className="border-box">
        {/* Label for the comfort food input field */}
        <label>Your Comfort Food:</label>
  
        {/* Input field to capture the user's comfort food, with the value controlled by the "value" prop */}
        {/* The onChange event triggers the handleComfortFoodChange function to update the form data */}
        <input type="text" value={value} onChange={handleComfortFoodChange} />
      </div>
    )
  }
  
  /**
   * Summary:
   * This component displays an input field for the user's comfort food, and as the user types, the handleComfortFoodChange function updates the form's state by calling the updateFormData function. 
   */