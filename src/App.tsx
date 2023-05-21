import React, { useEffect, useState } from "react"
import "./App.scss"
import MainPage from "components/MainPage/MainPage"
import { Container } from "react-bootstrap"
import { productType } from "data/product"
import { collections } from "data/collection"
import NavBar from "components/NavBar/NavBar"

function App() {
  const [appIsReady, setAppIsReady] = useState(false)
  const [dataToShow, setDataToShow] = useState<productType[]>(collections)

  useEffect(() => {
    setAppIsReady(true)
  }, [])

  if (!appIsReady) return null

  return (
    <Container style={{ width: "100%" }}>
      <NavBar setDataToShow={setDataToShow} />
      <MainPage dataToShow={dataToShow} />
    </Container>
  )
}

export default App
