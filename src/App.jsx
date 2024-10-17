AnnaBranch
import { MultiStepForm } from "./components/Multistepform.jsx";
import { MultiFormData } from "./components/MultiFormData.jsx";

export const App = () => {
  return (
    <>
      <div className="form-container">
        <MultiStepForm />
        <MultiFormData />
      </div>
    </>
  );
};

