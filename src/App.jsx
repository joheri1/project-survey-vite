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
<<<<<<< HEAD
    <>
      <div className="main-box">
        <div className="form-container">
          {/* <Header /> */}
          <MultiStepForm />
        </div>
      </div>
    </>
=======
    <div className="form-container">
      {hasStarted ? (
        <MultiStepForm />
      ) : (
        <StartPage onStart={startForm} />
      )}
    </div>
>>>>>>> dc62f59e80f91773713873ff5bea99c625e84791
  );
};

//commit-test