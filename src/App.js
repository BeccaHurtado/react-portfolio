import React from 'react'
import Navigation from './components/Nav/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {Routes} from "react-router";
import About from './components/About/about'
import Portfolio from './components/Portfolio/portfolio'
import Resume from './components/Resume/resume'
import Contact from './components/Contact/contact'
// import background from './public/img/image.png'

function App() {
  return (<BrowserRouter>


    <Navigation></Navigation>
    <Routes>
      <Route path="/" element={<About />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/resume" element={<Resume />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
  
    </Routes>
    {/* <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/image.png'})`}}></div> */}
    <footer></footer>

  </BrowserRouter>
  );
}

export default App;
