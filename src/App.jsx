import { MultiStepForm } from "./components/Multistepform.jsx";
import { StartPage } from "./components/StartPage.jsx";
import "./styles/App.css"
import { useState } from "react";


export const App = () => {
  const [hasStarted, setHasStarted] = useState(false);

  const startForm = () => {
    setHasStarted(true);
  };

  return (
    <>
      {hasStarted ? (
        <div className="multi-step-form">
          <MultiStepForm />
        </div>
      ) : (
        <div className="start-page-container">
          <StartPage onStart={startForm} />
        </div>
      )}
    </>
  );
};

