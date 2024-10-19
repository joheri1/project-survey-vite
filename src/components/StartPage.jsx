/* eslint-disable react/prop-types */
import "../styles/StartPage.css"

export const StartPage = ({ onStart }) => {
  // Function to handle the "Enter" key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onStart(); // Trigger the onStart function if Enter is pressed
    }
  };


  return (
    <><div className="start-page" onKeyDown={handleKeyPress} tabIndex="0">
      <div className="header">
        <h1>The Science of Happiness</h1>
        <h2>Everyday Joy Boosters Survey</h2>
      </div>
    </div>
      <div className="start-button">
        <button onClick={onStart} autoFocus>Let´s go!</button>
      </div></>

  )
}
