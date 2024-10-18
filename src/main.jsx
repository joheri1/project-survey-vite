import React from "react"
import ReactDOM from "react-dom"
import { App } from "./App.jsx"
// import { StartPage } from "./components/StartPage"
import "./index.css"
import "./styles/App.css"
// import "./styles/StartPage.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StartPage /> */}
  </React.StrictMode>
)
