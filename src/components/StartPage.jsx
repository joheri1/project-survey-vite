/* eslint-disable react/prop-types */


export const StartPage = ({ onStart }) => {
  return (
    <><div className="startpage">
      <div className="header">
        <h1>The Science of Happiness</h1>
        <h2>Everyday Joy Boosters Survey</h2>
      </div>
    </div>
      <div className="start-button">
        <button onClick={onStart}>Let´s go!</button>
      </div></>

  )
}
