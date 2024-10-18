import { MultiStepForm } from "./components/Multistepform.jsx";
import { StartPage } from "./components/StartPage.jsx";
import "./styles/App.css"
import { useState } from "react";
// import { Header } from "./components/Header.jsx"
// import "./styles/Header.css"

export const App = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const startForm = () => {
    setHasStarted(true);
  };

  return (
    <>
      <div className="form-container">
        {hasStarted ? (
          <MultiStepForm />
        ) : (
          <StartPage onStart={startForm} />
        )}
      </div>
    </>
  );
};


