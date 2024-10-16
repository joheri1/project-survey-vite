import { useState } from "react";
import { MoodQuestion } from "./MoodQuestion";
import { MusicHappyQuestion } from "./MusicHappyQuestion";
import { GenreQuestion } from "./GenreQuestion";

export const MultiFormData = () => {
  const [formData, setFormData] = useState({
    mood: "",
    option: "",
    genre: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      switch (currentStep) {
        case 1:
          if (formData.mood.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please enter your favourite mood-boosting song");
          break;
        case 2:
          if (formData.option.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please answer if music makes you happy");
          break;
        case 3:
          if (formData.genre.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please select a music genre");
          break;
        default:
          setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const submitForm = () => {
    console.log(formData);
    setFormSubmitted(true);
    const formattedData = `
    Mood: ${formData.mood}
    Option: ${formData.option}
    Genre: ${formData.genre}
    `;
    alert(formattedData);
  };

  const startOver = () => {
    setFormData({
      mood: "",
      option: "",
      genre: "",
    });
    setFormSubmitted(false);
    setCurrentStep(1);
  };

  return (
    <div>
      {!formSubmitted ? (
        <>
          {currentStep === 1 && (
            <MoodQuestion value={formData.mood} onChange={(value) => updateFormData("mood", value)} />
          )}
          {currentStep === 2 && (
            <MusicHappyQuestion value={formData.option} onChange={(value) => updateFormData("option", value)} />
          )}
          {currentStep === 3 && (
            <GenreQuestion value={formData.genre} onChange={(value) => updateFormData("genre", value)} />
          )}

          <div>
            {currentStep > 1 && <button onClick={prevStep}>Previous</button>}
            {currentStep < 3 ? (
              <button onClick={nextStep}>Next</button>
            ) : (
              <button onClick={submitForm}>Submit</button>
            )}
          </div>
        </>
      ) : (
        <div>
          <h3>Form Data</h3>
          <p>Mood: {formData.mood}</p>
          <p>Option: {formData.option}</p>
          <p>Genre: {formData.genre}</p>
          <button onClick={startOver}>Start Over</button>
        </div>
      )}
    </div>
  );
};
