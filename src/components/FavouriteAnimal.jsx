/* eslint-disable react/prop-types */
// Whats your favourite animal - text box

export const FavouriteAnimal = ({ updateFormData, value }) => {
  const handleFavouriteAnimalChange = (event) => {

    // Call updateFormData to update the "favoriteAnimal" field with the selected value
    updateFormData("favouriteAnimal", event.target.value);

  }

  return (
    <div className="border-box">
      <p>Favorite Animal:</p>
      <input type="text" value={value} onChange={handleFavouriteAnimalChange} />
    </div>
  );
};


