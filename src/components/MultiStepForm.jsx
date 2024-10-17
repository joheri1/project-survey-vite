/* eslint-disable react/prop-types */

/**
 * This component represents a multi-step form that collects user information such as favorite music and favorite animal */

import { useState } from "react"
import { ComfortFood } from "./ComfortFoodQuestion"
import { favoriteBreakfast } from "./BreakfastQuestion"
import { foodHappyOptions } from "./FoodHappyQuestion"

const MultiStepForm = () => {
    const [step, setStep] = useState(1)

console.log(ComfortFood, favoriteBreakfast, foodHappyOptions)

  return (
    <div>
      <h2>Test</h2>
      {/* <ComfortFood /> */}
      {/* <favoriteBreakfast /> */}
      {/* <foodHappyOptions /> */}
    </div>
  )
}

export default MultiStepForm 