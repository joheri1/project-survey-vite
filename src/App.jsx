/* eslint-disable react/prop-types */

import { useState } from 'react'
import FoodHappy from './components/FoodHappy'
import Breakfast from './components/FavoriteBreakfast'
import ComfortFood from './components/ComfortFood'

const App = () => {
  const [formData, setFormData] = useState({
    foodHappy: "",
    favoriteBreakfast: "",
    comfortFood: ""
  })

  const updateFormData = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    })
  }

  return (
    <div>
      <h2>4.</h2>
      <FoodHappy updateFormData={updateFormData} value={formData.foodHappy} />
      <h2>5.</h2>
      <Breakfast updateFormData={updateFormData} value={formData.favoriteBreakfast} />
      <h2>6.</h2>
      <ComfortFood updateFormData={updateFormData} value={formData.comfortFood} />
    </div>
  )
}

export default App
