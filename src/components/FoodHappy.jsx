/* eslint-disable react/prop-types */

// Does food make you happy? - radio buttons

/**
 * This component is used to collect and update if food makes the user happy in a multi-step form.
 */

const FoodHappy = ({ updateFormData, value }) => {
    const foodHappyOptions = [
        "Yes",
        "No",
        "Sometimes"
    ]

    return (
        <form> 
            <p>Does Food Make You Happy?</p>
            {foodHappyOptions.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        value={option}
                        onChange={(event) => updateFormData("foodHappy", event.target.value)}
                        checked={value === option}
                    />
                    {option}
                </label>
            ))} 
        </form>
    )
}

export default FoodHappy

/**
 * Summary:
 * This component displays radio buttons to ask if food makes the user happy. The user's selection is updated through the `updateFormData` function.
 */

