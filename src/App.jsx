/* eslint-disable react/prop-types */

import { useState } from 'react'

// Imports from main branch
import { MoodQuestion } from "./components/MoodQuestion.jsx"
import { MusicHappyQuestion } from "./components/MusicHappyQuestion.jsx";
import { GenreQuestion } from "./components/GenreQuestion.jsx";

// Imports from johanna-branch
import FoodHappyQuestion from './components/FoodHappyQuestion'
import BreakfastQuestion from './components/BreakfastQuestion'
import ComfortFoodQuestion from './components/ComfortFoodQuestion'

/* Empty strings in the form */
const App = () => {
  const [formData, setFormData] = useState({
    foodHappy: "",
    favoriteBreakfast: "",
    comfortFood: ""
  })
  
/* Hold the data for the user's response to update the formData object */ 
  const updateFormData = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    })
  }

  return (
    <div>
      <MoodQuestion />
      <MusicHappyQuestion />
      <GenreQuestion />
    
      <h2>4.</h2>
      <FoodHappyQuestion updateFormData={updateFormData} value={formData.foodHappy} />
      <h2>5.</h2>
      <BreakfastQuestion updateFormData={updateFormData} value={formData.favoriteBreakfast} />
      <h2>6.</h2>
      <ComfortFoodQuestion updateFormData={updateFormData} value={formData.comfortFood} />
    </div>
  )
}

export default App