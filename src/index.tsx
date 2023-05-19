import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import { HashRouter } from "react-router-dom"
import App from "./App"

ReactDOM.hydrate(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root"),
)
