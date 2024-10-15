/* eslint-disable react/prop-types */

/**
 * This component is used to collect and update the user's go-to breakfast in a multi-step form.
 */

export const Breakfast = ({ updateFormData, value }) => {
  const handleFavoriteBreakfastChange = (e) => {
    updateFormData("favoriteBreakfast", e.target.value);
  }

  return (
    <div className="border-box">
      <label>What option would most likely be your go-to breakfast?</label>
      <select value={value} onChange={handleFavoriteBreakfastChange}>
        <option>Select a breakfast</option>
        <option value="smoothie-bowl">Smoothie bowl</option>
        <option value="overnight-oats">Overnight oats</option>
        <option value="scrambled-eggs">Scrambled eggs</option>
        <option value="croissant-banana">Croissant and a banana</option>
        <option value="yoghurt-berries">Greek yoghurt with berries</option>
      </select>
    </div>
  )
}

export default Breakfast

/**
* Summary:
* This component provides a dropdown for selecting the user's favorite breakfast and updates the form state when a selection is made.
*/
