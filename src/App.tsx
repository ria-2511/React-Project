import React, { useEffect, useState } from "react"
import "./App.scss"
import MainPage from "components/MainPage/MainPage"
import { Container } from "react-bootstrap"

function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    setAppIsReady(true)
  }, [])

  if (!appIsReady) return null

  return (
    <Container style={{ width: "100%" }}>
      <MainPage />
    </Container>
  )
}

export default App
