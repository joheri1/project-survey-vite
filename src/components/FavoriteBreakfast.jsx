/* eslint-disable react/prop-types */

/**
 * This component is used to collect and update the user's go-to breakfast in a multi-step form.
 */

export const Breakfast = ({ updateFormData, value }) => {
    // Function to handle the user's selection and update the form's favoriteBreakfast field
    const handleFavoriteBreakfastChange = (e) => {
      // Call updateFormData to update the "favoriteBreakfast" field with the selected value
      updateFormData("favoriteBreakfast", e.target.value);
    }
  
    return (
      <div className="border-box">
        {/* Label for the favorite breakfast dropdown */}
        <label>Breakfast:</label>
  
        {/* Dropdown to select the user's favorite breakfast, controlled by the "value" prop */}
        {/* The onChange event triggers the handleFavoriteBreakfastChange function to update the form data */}
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
  
  /**
   * Summary:
   * This component provides a dropdown for selecting the user's favorite breakfast and updates the form state when a selection is made.
   */