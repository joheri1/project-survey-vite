//Whats your favourite Disney-animal? - dropdown menu 
//"Select"
// Lejonkungen - simba
// Lady and the tramp - Lady 
// Finding nemo - clown-fish 
// Aristocats - kitten
// Mickey mouse - mouse
// Chip n' Dale - chipmunks 

export const Question9 = ({ updateFormData, value }) => {
  // Function to handle the user's selection and update the form's favoriteBand field
  const handleQuestion9Change = (event) => {
    // Call updateFormData to update the "favoriteBand" field with the selected value
    updateFormData("question7", event.target.value);
  };

  return (
    <div className="border-box">
      {/* Label for the favorite band dropdown */}
      <label>Favorite Disney Animal:</label>

      {/* Dropdown to select the user's favorite band, controlled by the "value" prop */}
      {/* The onChange event triggers the handleFavoriteBandChange function to update the form data */}
      <select value={value} onChange={handleQuestion9Change}>
        <option value="">Select a</option>
        <option value="simba">Simba-Lion in The Lion King</option>
        <option value="lady-tramp">Lady and the Tramp-Dogs</option>
        <option value="nemo">Nemo-Clownfish in Finding Nemo</option>
        <option value="aristocats">Thomas O' Malley-Cat in Aristocats</option>
        <option value="mickey">Mickey Mouse- Famous Disney Mouse</option>
        <option value="chip-dale">Chip 'n' Dale - Chipmunks </option>
      </select>
    </div>
  );
};
