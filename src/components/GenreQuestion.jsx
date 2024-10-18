/* eslint-disable react/prop-types */

export const GenreQuestion = ({ updateFormData, value }) => {
  const handleGenreQuestionChange = (event) => {
    updateFormData("genreQuestion", event.target.value);
  };

  return (
    <div>
      <div className="question-container">
        <h1>3.</h1>
        <p>Whats your favourite music genre?</p>
      </div>
      <div className="answer-container">
        <form>
          <div className="answer-container-dropdown">
            <select value={value}
              onChange={handleGenreQuestionChange}
            >
              <option value="">Select </option>
              <option value="Rock">Rock</option>
              <option value="Pop">Pop</option>
              <option value="House">House</option>
              <option value="R&B">R&B</option>
              <option value="Indie">Indie</option>
            </select>
          </div>
        </form>
      </div>

    </div>
  );
};