import React from 'react'
// import Navigation from './components/Nav/nav'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Routes, Route} from "react-router";
import About from './components/About/about'
import Portfolio from './components/Portfolio/portfolio'
import Resume from './components/Resume/resume'
import Contact from './components/Contact/contact'
import ResponsiveAppBar from './components/Nav/nav'

import { ThemeProvider, createTheme } from '@mui/material/styles'
const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {
  return (
  <div>
    <ThemeProvider theme={darkTheme}>
    <ResponsiveAppBar />
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>

    </ThemeProvider>
  </div>
  );
}

export default App;
