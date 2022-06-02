import React from 'react'
// import Navigation from './components/Nav/nav'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Routes, Route} from "react-router";
import About from './components/About/about'
import Portfolio from './components/Portfolio/portfolio'
import Resume from './components/Resume/resume'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import ResponsiveAppBar from './components/Nav/nav'
import Paper from '@mui/material/Paper';
import image from './components/peach.png'
import { ThemeProvider, createTheme } from '@mui/material/styles'
const darkTheme = createTheme({
  palette: {
    
    mode: 'light',
    primary: {
      main: '#d27b7b'
    }

  }
})

const styles = {
  paperContainer: {
    height: 1300,
      backgroundImage: `url(${image})`
  }
};

function App() {
  return (
  <div>
    <ThemeProvider theme={darkTheme}>
    <Paper style={styles.paperContainer}>
    <ResponsiveAppBar />
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </Paper>
    <Footer/>
    </ThemeProvider>
  </div>
  );
}

export default App;
