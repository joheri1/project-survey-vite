/* eslint-disable react/prop-types */
// Whats your favourite animal - text box

export const FavouriteAnimal = ({ updateFormData, value }) => {
  const handleFavouriteAnimalChange = (event) => {

    // Call updateFormData to update the "favoriteAnimal" field with the selected value
    updateFormData("favouriteAnimal", event.target.value);

  }

  return (
    <>
      <div className="question-container">
        <h1>8</h1>
        <p>What is your favorite animal?</p>
      </div>
      <div className="answer-container">
        <input type="text" value={value} onChange={handleFavouriteAnimalChange} />
      </div>
    </>
  );
};


