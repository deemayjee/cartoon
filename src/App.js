import React from 'react';
import axios from 'axios';
import './App.css';
import Categories from './components/Categories';
import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Locations from './pages/Locations';
import Episodes from './pages/Episodes';
import Characters from './pages/Characters';


function App() {
  return (
  
    <Router basename="/">
      <div>
        <div className="App-cont">
            <div className="logo">
              <div className="logo-img">
                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1598px-Rick_and_Morty.svg.png" height="100" width="350" alt={"character"}/></a>
              </div>
            </div>
        </div>

        <Switch>
          <Route exact path="/character" component={Characters} />
          <Route path="/locations" component={Locations} />
          <Route path="/episodes" component={Episodes} />
          <Route exact path="/" component={Categories} />
        </Switch>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
