import { createTheme, ThemeProvider } from "@mui/material/styles"
import React, { useEffect, useState } from "react"
import { themeOptions } from "theme/mui-theme-styles"
import "./App.scss"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Copyright} from "components/copyright";
import {collections} from "./data/collection";
import ReactJson from "react-json-view";
import {product} from "./data/product";

function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    setAppIsReady(true)
  }, [])

  if (!appIsReady) return null

  return <ThemeProvider theme={createTheme(themeOptions)}>
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Kalira React App boilerplate in TypeScript
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          * src/data/product.json
          <ReactJson src={product} name={"product"} collapsed={true} theme={"monokai"} enableClipboard={true} sortKeys={true}/>
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          * src/data/collection.json
          <ReactJson src={collections} name={"collections"} collapsed={true} theme={"monokai"} enableClipboard={true} sortKeys={true}/>
        </Typography>
        <Copyright />
      </Box>
    </Container>
  </ThemeProvider>
}

export default App
