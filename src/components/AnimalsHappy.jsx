// Does animals make you happy - radio buttons

import { useState } from "react"

export const AnimalsHappy = ({ updateFormData, value }) => {
  // Function to handle the user's selection and update the form's favoriteAnimal field
  const handleAnimalsHappy = (event) => {
    // Call updateFormData to update the "favoriteBand" field with the selected value
    updateFormData("animalsHappy", event.target.value);
  };

  const alternatives = ["Yes", "No"]

  const App = () => {

    const [selectedAlternative, setSelectedAlternative] = useState("")

    return (
      <form>
        {alternatives.map((alternative) => (
          <label key={alternative}>
            <input
              type="radio"
              value={alternative}
              onChange={(event) => setSelectedAlternative(event.target.value)}
              checked={selectedAlternative === alternative}
            />
            {alternative}
          </label>
        ))}

      </form >
    )

  }

}
