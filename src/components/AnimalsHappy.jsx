/* eslint-disable react/prop-types */
// Does animals make you happy - radio buttons

// Step 1: Define an array of alternatives (Yes/No).
// This array contains the possible options for the radio buttons.
const alternatives = ["Yes", "No"];

// Step 2: Define and export the "AnimalsHappy" component.

// This is a React component that takes two props: "value" and "updateFormData".
// - "value" holds the current selected value of the radio buttons.
// - "updateFormData" is a function that updates the form data in the parent component.
export const AnimalsHappy = ({ value, updateFormData }) => {
  return (
    // Step 3: Create a form element.
    <form>
      {/* Step 4: Display a question inside a paragraph element */}
      <div className="question-container">
        <h1>7.</h1>
        <p>Does animals make you happy?</p>
      </div>
      {/* Step 5: Loop through the "alternatives" array (Yes/No) to create a radio button for each option */}
      <div className="answer-container">
        {alternatives.map((alternative) => (
          // Step 6: For each alternative, create a label and a corresponding radio input field.
          // The "key" attribute is required in React when rendering multiple elements in a loop.
          <label key={alternative}>
            <input
              type="radio" //This makes it a radio button.
              value={alternative} //The value of the radio button will be either "Yes" or "No".
              onChange={(event) => updateFormData("animalsHappy", event.target.value)} //This function triggers when the user selects a radio button. updateFormData("animalsHappy", event.target.value)}
              checked={value === alternative} // Use the value passed from parent
            />
            {alternative}
          </label>
        ))}
      </div>
    </form>
  );
};


