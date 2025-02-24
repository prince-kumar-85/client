import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import { lightTheme } from './utils/Themes';


const Container=styled.div`
  height:100vh;
  width:100%;
  display:flex;
  flex-direction:column;
  background:${({theme})=>theme.bg};
`;



function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
      <Container>HI prince</Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
