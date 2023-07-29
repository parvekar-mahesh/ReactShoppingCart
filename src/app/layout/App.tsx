import { useEffect, useState } from "react";
import logo from "./logo.svg";
import Product from "../models/Product"
import Catalog from "../../features/catalog/Catalog";
import { Container, CssBaseline, ThemeProvider, Typography, createTheme } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode? 'dark':'light' 
  const theme = createTheme(
    {
      palette: {
        mode:paletteType
      }
    }
  )

  function handleThemeChange()
  {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar  theme="colored" ></ToastContainer>
      <CssBaseline></CssBaseline>
      {/* <Typography variant="h5">React Store</Typography> */}
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}></Header>
      <Container>
      <Outlet></Outlet>
      {/* <Catalog></Catalog> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
