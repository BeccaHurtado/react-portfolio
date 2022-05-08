import React from 'react'
import Navigation from './components/Nav/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {Routes} from "react-router";
import About from './components/About/about'
import Portfolio from './components/Portfolio/portfolio'
import Resume from './components/Resume/resume'
import Contact from './components/Contact/contact'
function App() {
  return (<BrowserRouter>


    <Navigation></Navigation>
    <Routes>
    <Route path="/" element={<About />}></Route>
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/contact" component={Contact} />
    </Routes>
    <footer></footer>

  </BrowserRouter>
  );
}

export default App;
