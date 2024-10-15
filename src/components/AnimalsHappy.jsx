// Does animals make you happy - radio buttons

import { useState } from "react"

const alternatives = ["Yes", "No"]

export const AnimalsHappy = () => {
  const [selectedAlternative, setSelectedAlternative] = useState("")

  return (
    <form>
      <p>Does animals make you happy?</p>
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

    </form>
  )
}


