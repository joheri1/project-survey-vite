import { useState } from "react";
import { AnimalsHappy } from "./AnimalsHappy";
import { FavouriteAnimal } from "./FavouriteAnimal";
import { FavouriteDisneyAnimal } from "./FavouriteDisneyAnimal";

// Component: MultiStepForm
export const MultiStepForm = () => {
  // State to store form data for each field
  const [formData, setFormData] = useState({
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
    if (currentStep < 4) {
      switch (currentStep) {
        case 1:
          // Check if a value is selected for the radio button (yes or no)
          if (formData.animalsHappy) {
            setCurrentStep(currentStep + 1);
          } else {
            alert("Please answer yes or no");
          }
          break;
        case 2:
          // If the favoriteAnimal field is not empty, go to the next step, otherwise show an alert
          if (formData.favouriteAnimal.trim() !== "") setCurrentStep(currentStep + 1);
          else
            alert("Please write your favourite animal");
          break;
        case 3:
          if (formData.favouriteDisneyAnimal.trim() !== "") setCurrentStep(currentStep + 1);
          else alert("Please choose your favourite Disney Animal");
          break;
        case 4:
          setCurrentStep(currentStep + 1);
          break;
        default:
          break;
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


    const formattedData = `
      Does Animals make you happy: ${formData.animalsHappy}
      Favorite Animal: ${formData.favouriteAnimal}
      Favorite Disney Animal: ${formData.favouriteDisneyAnimal}
    `;
    alert(formattedData);
  };

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
    <>
      {formSubmitted ? (
        <h2>Thanks for Voting!</h2>
      ) : (
        <>
          {/* Render components based on the current step */}
          {currentStep === 1 && (
            <AnimalsHappy value={formData.animalsHappy} updateFormData={updateFormData} />
          )}
          {currentStep === 2 && (
            <FavouriteAnimal value={formData.favouriteAnimal} updateFormData={updateFormData} />
          )}
          {currentStep === 3 && (
            <FavouriteDisneyAnimal value={formData.favouriteDisneyAnimal} updateFormData={updateFormData} />
          )}

          {/* Navigation buttons */}
          <div className="cta-box">
            {currentStep > 1 && <button onClick={prevStep}>Back</button>}
            {currentStep < 4 ? (
              <button onClick={nextStep}>Next</button>
            ) : (
              <button onClick={submitForm}>Submit Form</button>
            )}
          </div>
        </>
      )}

      {/* Display form data after submission */}
      {formSubmitted && (
        <div className="border-box">
          <h3>Voting Information</h3>
          <p>Does animals make you happy?: {formData.animalsHappy}</p>
          <p>Favorite Animal: {formData.favouriteAnimal}</p>
          <p>Favorite Disney Animal: {formData.favouriteDisneyAnimal}</p>
          <button onClick={startOver}>Start Over</button>
        </div>
      )}
    </>
  );
};





































// import { useState } from "react";
// import { AnimalsHappy } from "./AnimalsHappy";
// import { FavouriteAnimal } from "./FavouriteAnimal";
// import { FavouriteDisneyAnimal } from "./FavouriteDisneyAnimal"

// // Component: MultiStepForm
// export const MultiStepForm = () => {
//   // State to store form data for each field (name, age, email, favorite band, album, artist)
//   const [formData, setFormData] = useState({

//     favouriteAnimal: "",
//     animalsHappy: "",
//     favoriteDisneyAnimal: "",
//   });
// }

// // State to track whether the form has been submitted
// const [formSubmitted, setFormSubmitted] = useState(false);

// // ---
// // ---

// // State to track the current step (1 through 6)
// const [currentStep, setCurrentStep] = useState(1);

// // ---
// // ---

// // Function to update form data based on the provided field (key) and value
// const updateFormData = (field, value) => {
//   // Update the specific field of formData while preserving other fields
//   setFormData((previous) => ({ ...previous, [field]: value }));
// };
// // 1. This function takes in two arguments: 'field' (the form field that needs to be updated) and 'value' (the new value for that field).
// // 2. It uses the setFormData function to update the state of formData.
// // 3. The spread operator (...previous) keeps all the existing fields in formData unchanged.
// // 4. The specific field, passed as 'field', is updated with the new 'value' provided.
// // 5. This ensures that only the targeted field is updated while preserving the rest of the form data.

// // ---
// // ---

// // Function to move to the next step in the form, with validation at each step
// // Function to move to the next step in the form, with validation at each step
// const nextStep = () => {
//   if (currentStep < 4) {
//     // Validate the current step's data before proceeding
//     switch (currentStep) {
//       case 1:
//         // If the animalsHappy field is not empty, go to the next step, otherwise show an alert
//         if (formData.animalsHappy.trim() !== "") setCurrentStep(currentStep + 1);
//         else alert("Please answer yes or no");
//         break;
//       case 2:
//         // If the favouriteAnimal field is not empty, go to the next step, otherwise show an alert
//         if (formData.favouriteAnimal.trim() !== "") setCurrentStep(currentStep + 1);
//         else alert("Please write your favourite animal");
//         break;
//       case 3:
//         // If the email field is not empty, go to the next step, otherwise show an alert
//         if (formData.favouriteDisneyAnimal.trim() !== "") setCurrentStep(currentStep + 1);
//         else alert("Please choose your favourite Disney Animal");
//         break;
//       case 4:
//         // If none of the above, proceed to the next step automatically
//         setCurrentStep(currentStep + 1);
//     }
//   }
// };
// // Function to submit the form, log the form data, and display it
// const submitForm = () => {
//   console.log(formData);
//   setFormSubmitted(true); // Set form as submitted
//   // Format the form data for displaying in the alert
//   const formattedData = `
//   Does Animals make you happy: ${formData.animalsHappy}
//   Favorite Animal: ${formData.favoriteAnimal}
//   Favorite Disney Animal: ${formData.favoriteDisneyAnimal}
// `;
//   alert(formattedData); // Display the formatted data in an alert
// };

// // Function to reset the form data and start the process over
// const startOver = () => {
//   // Clear the form data and reset to the first step
//   setFormData({
//     favouriteAnimal: "",
//     animalsHappy: "",
//     favoriteDisneyAnimal: "",
//   });
//   setFormSubmitted(false); // Reset form submission state
//   setCurrentStep(1); // Reset to the first step
// };

// return (
//   <>
//     {formSubmitted ? (
//       <h2>Thanks for Voting!</h2>
//     ) : null}
//   </>
// );


// {/* Render the Animals Happy component on step 1 */ }
// {
//   currentStep === 1 && (
//     <Happy value={formData.animalsHappy} updateFormData={updateFormData} />
//   )
// }
// {/* Render the Favourite Animal component on step 2 */ }
// {
//   currentStep === 2 && (
//     <Animal value={formData.favouriteAnimal} updateFormData={updateFormData} />
//   )
// }
// {/* Render the Favourite Disney Animal component on step 3 */ }
// {
//   currentStep === 3 && (
//     <Disney value={formData.favouriteDisneyAnimal} updateFormData={updateFormData} />
//   )
// }

// {/* Navigation buttons for moving between steps */ }
// {
//   !formSubmitted && (
//     <div className="cta-box">
//       {/* Show "Back" button if not on the first step */}
//       {currentStep > 1 && <button onClick={prevStep}>Back</button>}
//       {/* Show "Next" button or "Submit" button depending on the step */}
//       {currentStep < 4 ? (
//         <button onClick={nextStep}>Next</button>
//       ) : (
//         <button onClick={submitForm}>Submit Form</button>
//       )}
//     </div>
//   )
// }

// {/* Display the form data after submission */ }
// {
//   formSubmitted && (
//     <div className="border-box">
//       <h3>Voting Information</h3>
//       <p>Does animals make you happy?: {formData.animalsHappy}</p>
//       <p>Favorite Album: {formData.favoritAnimal}</p>
//       <p>Favorite Artist: {formData.favoriteDisneyAnimal}</p>
//       {/* Button to reset the form and start over */}
//       <button onClick={startOver}>Start Over</button>
//     </div>
//   )
// }


// // * Summary:
// // * This multi-step form demonstrates how to manage complex form data across multiple steps with React's useState hook.
// // * It validates input at each step and conditionally renders different components based on the current step.
// // * The form collects user information and, upon submission, displays the data. The user can reset the form and start over.
// // * This component is useful for teaching how to manage multi-step forms, form validation, and state management.
// // *