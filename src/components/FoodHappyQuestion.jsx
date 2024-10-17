/* eslint-disable react/prop-types */

/**
 * This component is used to collect and update if food makes the user happy in a multi-step form. 
 */

const options = [
    "Yes",
    "No",
    "Sometimes"
]

export const FoodHappyQuestion = ({ value, updateFormData }) => {

    return (
        <div>
            <div className="question-container">
                <h1>4</h1>
                <p>Does Food Make You Happy?</p>
            </div>
            <div className="answer-question">
                <form>
                    {options.map((option) => (
                        <label key={option}>
                            <input
                                type="radio"
                                value={option}
                                onChange={(event) => updateFormData("foodHappyQuestion", event.target.value)}
                                checked={value === option}
                            /*Check if the option is selected*/
                            />
                            {option === 'Yes' ? 'No' : 'Sometimes'}
                        </label>
                    ))}
                </form>
            </div>
        </div>
    );
};

/* eslint-disable react/prop-types */

/**
 * Summary:
 * This component displays radio buttons to ask if food makes the user happy. The options are "Yes," "No," and "Sometimes." The user's selection is stored in the component's state via useState. 
 */
