// Whats your favourite animal - text box

export const Question7 = ({ updateFormData, value }) => {
  // Function to handle the user's selection and update the form's favoriteBand field
  const handleQuestion7Change = (event) => {
    // Call updateFormData to update the "favoriteBand" field with the selected value
    updateFormData("question7", event.target.value);
  };

  return (
    <div className="border-box">
      {/* Label for the name input field */}
      <label>Favourite animal?:</label>

      {/* Input field to capture the user's name, with the value controlled by the "value" prop */}
      {/* The onChange event triggers the handleNameChange function to update the form data */}
      <input type="text" value={value} onChange={handleQuestion7Change} />
    </div>
  );
};