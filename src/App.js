import React, { Component } from 'react';
import { Link, Route, Switch, HashRouter } from 'react-router-dom';

import './App.css';
import { Resume } from './Resume';
import { CoverLetter } from './CoverLetter';
import { Illustrate } from './Illustrate';
import { Home } from './Home';
import User from './User';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="flex-row">
          <div className="sidebar" >
            <Link to={'/'}>HOME</Link><br/><br/>
            <Link to={'/illustrate'}>ILLUSTRATE - USERS</Link><br/><br/>
            <Link to={'/resume'}>RESUME</Link><br/><br/>
            <Link to={'/cover-letter'}>COVER LETTER</Link><br/><br/>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/illustrate/" component={Illustrate} />
              <Route exact path="/illustrate/user/:id" component={User} />
              <Route exact path="/resume/" component={Resume} />
              <Route exact path="/cover-letter" component={CoverLetter} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
