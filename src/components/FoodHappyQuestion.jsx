/* eslint-disable react/prop-types */

// Does food make you happy? - radio buttons

/**
 * This component is used to collect and update if food makes the user happy in a multi-step form. 
 */

import { useState } from 'react'

const foodHappyOptions = [
    "Yes",
    "No",
    "Sometimes"
]

const App = () => {
    const [foodHappy, setFoodHappy] = useState("") 
    /* useState for tracking selected option */

    return (
        <form> 
            <p>Does Food Make You Happy?</p>
            {foodHappyOptions.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        value={option}
                        onChange={(event) => setFoodHappy(event.target.value)}
                        checked={foodHappy === option} 
                        /*Check if the option is selected*/
                    />
                    {option}
                </label>
            ))} 
        </form>
    )
}

export default App

/**
 * Summary:
 * This component displays radio buttons to ask if food makes the user happy. The options are "Yes," "No," and "Sometimes." The user's selection is stored in the component's state via useState. 
 */
