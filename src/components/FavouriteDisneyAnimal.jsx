/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
//Whats your favourite Disney-animal? - dropdown menu 
//"Select"
// Lejonkungen - simba
// Lady and the tramp - Lady 
// Finding nemo - clown-fish 
// Aristocats - kitten
// Mickey mouse - mouse
// Chip n' Dale - chipmunks 


export const FavouriteDisneyAnimal = ({ updateFormData, value }) => {
  const handleFavouriteDisneyAnimalChange = (event) => {
    updateFormData("favouriteDisneyAnimal", event.target.value);
  };
  return (
    <>
      <div className="question-container">
        <h1>9.</h1>
        <p>Favorite Disney Animal:</p>
      </div>
      <div className="answer-container">
        <form>
          {/* Dropdown to select the user's favorite Disney Animal */}
          <select value={value} onChange={handleFavouriteDisneyAnimalChange}>
            <option value="">Select a Disney Animal</option>
            <option value="Simba – Lion (The Lion King)">Simba – Lion (The Lion King)</option>
            <option value="Lady & Tramp – Dogs (Lady and the Tramp)">Lady & Tramp – Dogs (Lady and the Tramp)</option>
            <option value="Nemo – Clownfish (Finding Nemo)">Nemo – Clownfish (Finding Nemo)</option>
            <option value="Thomas O'Malley – Cat (The Aristocats)">Thomas O'Malley – Cat (The Aristocats)</option>
            <option value="Mickey Mouse – Iconic Disney Character">Mickey Mouse – Iconic Disney Character</option>
            <option value="Chip 'n' Dale – Chipmunks (Rescue Rangers)">Chip 'n' Dale – Chipmunks (Rescue Rangers)</option>
          </select>
        </form>
      </div>
    </>
  );
};
