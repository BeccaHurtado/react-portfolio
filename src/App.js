import React from 'react'
import Navigation from './components/Nav/nav'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About/about'
import Portfolio from './components/Portfolio/portfolio'
import Resume from './components/Resume/resume'
import Contact from './components/Contact/contact'
function App() {
  return (<BrowserRouter>
    <div className="App">
      
      <Navigation></Navigation>
      <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/contact" component={Contact} />
      </Switch>
      <footer></footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
