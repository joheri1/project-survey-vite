/* eslint-disable react/prop-types */
// Does animals make you happy - radio buttons


const alternatives = ["Yes", "No"];

export const AnimalsHappy = ({ value, updateFormData }) => {
  return (
    <form>
      <p>Does animals make you happy?</p>
      {alternatives.map((alternative) => (
        <label key={alternative}>
          <input
            type="radio"
            value={alternative}
            onChange={(event) => updateFormData("animalsHappy", event.target.value)}
            checked={value === alternative} // Use the value passed from parent
          />
          {alternative}
        </label>
      ))}
    </form>
  );
};


