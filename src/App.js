import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import './App.css';
import { Resume } from './Resume';
import { CoverLetter } from './CoverLetter';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="flex-row">
          <div className="sidebar" >
            <Link to={'/resume'}>RESUME</Link><br/><br/>
            <Link to={'/cover-letter'}>COVER LETTER</Link><br/><br/>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Resume} />
              <Route exact path="/resume/" component={Resume} />
              <Route exact path="/portfolio/" component={Resume} />
              <Route exact path="/cover-letter" component={CoverLetter} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;