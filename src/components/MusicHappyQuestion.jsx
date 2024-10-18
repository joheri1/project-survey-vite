/* eslint-disable react/prop-types */

const options = ['yes', 'no']

export const MusicHappyQuestion = ({ value, updateFormData }) => {

  return (
    <div>
      <div className="question-container">
        <h1>2.</h1>
        <p>Does music make you happy?</p>
      </div>
      <div className="answer-container">
        <form>
          {options.map((option) => (
            <label key={option} className="radio-label"> 
              <input
                type="radio"
                value={option}
                onChange={(event) => updateFormData("musicHappyQuestion", event.target.value)}
                checked={value === option}
              />
              <span>{option === 'yes' ? 'YES absolutely' : 'NO I like the silence'}
                </span>
            </label>
          ))}
        </form>
      </div>
    </div>
  );
};

