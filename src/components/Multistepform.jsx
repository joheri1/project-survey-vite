
import { useState } from "react";
import { MoodQuestion } from "./MoodQuestion";
import { MusicHappyQuestion } from "./MusicHappyQuestion";
import { GenreQuestion } from "./GenreQuestion";
import { ComfortFood } from "./ComfortFoodQuestion";
import { FoodHappyQuestion } from "./FoodHappyQuestion";
import { Breakfast } from "./BreakfastQuestion";
import { AnimalsHappy } from "./AnimalsHappy";
import { FavouriteAnimal } from "./FavouriteAnimal";
import { FavouriteDisneyAnimal } from "./FavouriteDisneyAnimal";

// Component: MultiStepForm
export const MultiStepForm = () => {
  // State to store form data for each field
  const [formData, setFormData] = useState({
    moodQuestion: "",
    musicHappyQuestion: "",
    genreQuestion: "",
    comfortFood: "",
    foodHappyQuestion: "",
    breakfast: "",
    animalsHappy: "",
    favouriteAnimal: "",
    favouriteDisneyAnimal: "",
  });

  // State to track whether the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false);

  // State to track the current step
  const [currentStep, setCurrentStep] = useState(1);

  // Function to update form data
  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  // Function to move to the next step
  const nextStep = () => {
    if (currentStep < 10) {
      switch (currentStep) {
        case 1:
          if (formData.moodQuestion) {
            setCurrentStep(currentStep + 1);
          } else {
            alert("Please answer what your go-to happy song is");
          }
          break;
        case 2:
          if (formData.musicHappyQuestion) {
            setCurrentStep(currentStep + 1);
          } else {
            alert("Please answer if music makes you happy");
          }
          break;
        case 3:
          if (formData.genreQuestion) {
            setCurrentStep(currentStep + 1);
          } else {
            alert("Please pic a genre");
          }
          break;
        case 4:
          if (formData.comfortFood) {
            setCurrentStep(currentStep + 1);
          } else {
            alert("Please choose...");
          }
          break;
        case 5:
          if (formData.foodHappyQuestion) {
            setCurrentStep(currentStep + 1);
          } else {
            alert("Please choose...");
          }
          break;
        case 6:
          if (formData.breakfast) {
            setCurrentStep(currentStep + 1);
          } else {
            alert("Please choose...");
          }
          break;
        case 7:
          // Check if a value is selected for the radio button (yes or no)
          if (formData.animalsHappy) {
            setCurrentStep(currentStep + 1);
          } else {
            alert("Please answer yes or no");
          }
          break;
        case 8:
          // If the favoriteAnimal field is not empty, go to the next step, otherwise show an alert
          if (formData.favouriteAnimal.trim() !== "") setCurrentStep(currentStep + 1);
          else
            alert("Please write your favourite animal");
          break;
        case 9:
          if (formData.favouriteDisneyAnimal.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please choose your favourite Disney Animal");
          break;
        default:
          setCurrentStep(currentStep + 1);
      }
    }
  };

  // Function to move to the previous step
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Function to submit the form 
  const submitForm = () => {
    console.log(formData);
    setFormSubmitted(true);
  }

  // Function to reset the form data
  const startOver = () => {
    setFormData({
      favouriteAnimal: "",
      animalsHappy: "",
      favouriteDisneyAnimal: "",
    });
    setFormSubmitted(false);
    setCurrentStep(1);
  };

  return (
    <div className="multi-step-form">
      {formSubmitted ? (
        <></>
      ) : (
        <>
          {/* Render components based on the current step */}
          {currentStep === 1 && (
            <MoodQuestion value={formData.moodQuestion} updateFormData={updateFormData} />
          )}
          {currentStep === 2 && (
            <MusicHappyQuestion value={formData.musicHappyQuestion} updateFormData={updateFormData} />
          )}
          {currentStep === 3 && (
            <GenreQuestion value={formData.genreQuestion} updateFormData={updateFormData} />
          )}
          {currentStep === 4 && (
            <ComfortFood value={formData.comfortFood} updateFormData={updateFormData} />
          )}
          {currentStep === 5 && (
            <FoodHappyQuestion value={formData.foodHappyQuestion} updateFormData={updateFormData} />
          )}
          {currentStep === 6 && (
            <Breakfast value={formData.breakfast} updateFormData={updateFormData} />
          )}
          {currentStep === 7 && (
            <AnimalsHappy value={formData.animalsHappy} updateFormData={updateFormData} />
          )}
          {currentStep === 8 && (
            <FavouriteAnimal value={formData.favouriteAnimal} updateFormData={updateFormData} />
          )}
          {currentStep === 9 && (
            <FavouriteDisneyAnimal value={formData.favouriteDisneyAnimal} updateFormData={updateFormData} />
          )}

          {/* Navigation buttons */}
          <div className="button-container">
            {currentStep > 1 && <button className="back-button" onClick={prevStep}>Back</button>}
            {currentStep < 10 ? (
              <button className="next-button" onClick={nextStep}>Next</button>
            ) : (
              <button onClick={submitForm}>Submit Form</button>
            )}
          </div>
        </>
      )}

      {/* Display form data after submission */}
      {formSubmitted && (
        <div className="submitted-form-container">
          <h1>Thank you for your answers!</h1>
          <h2>Here is a summary:</h2>
          <p>What is your go-to mood boosting song? <span className="answer">{formData.moodQuestion}</span></p>
          <p>Does music make you happy? <span className="answer">{formData.musicHappyQuestion}</span></p>
          <p>What is your favourite music genre? <span className="answer">{formData.genreQuestion}</span></p>
          <p>What is your comfort-food? <span className="answer">{formData.comfortFood}</span></p>
          <p>Does food make you happy? <span className="answer">{formData.foodHappyQuestion}</span></p>
          <p>What option would most likely be your go-to breakfast? <span className="answer">{formData.breakfast}</span></p>
          <p>Does animals make you happy? <span className="answer">{formData.animalsHappy}</span></p>
          <p>Favorite Animal: <span className="answer">{formData.favouriteAnimal}</span></p>
          <p>Favorite Disney Animal: <span className="answer">{formData.favouriteDisneyAnimal}</span></p>
          <button onClick={startOver}>Start Over</button>
        </div>
      )}
    </div>
  );
};

