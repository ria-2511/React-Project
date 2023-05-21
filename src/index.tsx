import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "App"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/React-Project/",
    element: <App />,
  },
])

ReactDOM.hydrate(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root"),
)
