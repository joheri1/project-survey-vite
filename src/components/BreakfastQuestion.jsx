/* eslint-disable react/prop-types */

/**
 * This component is used to collect and update the user's go-to breakfast in a multi-step form.
 */

export const Breakfast = ({ updateFormData, value }) => {
  const handleBreakfastChange = (event) => {
    updateFormData("breakfast", event.target.value);
  };

  return (
    <div>
      <div className="question-container">
        <h1>6.</h1>
        <p>What option would most likely be your go-to breakfast?</p>
      </div>
      <div className="answer-container">
        <form>
          <div className="answer-container-dropdown">
            <select value={value} onChange={handleBreakfastChange}>
              <option>Select </option>
              <option value="smoothie-bowl">Smoothie bowl</option>
              <option value="overnight-oats">Overnight oats</option>
              <option value="scrambled-eggs">Scrambled eggs</option>
              <option value="croissant-banana">Croissant and a banana</option>
              <option value="yoghurt-berries">Greek yoghurt with berries</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

/**
* Summary:
* This component provides a dropdown for selecting the user's favorite breakfast and updates the form state when a selection is made.
*/


