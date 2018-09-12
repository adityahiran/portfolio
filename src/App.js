import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import './App.css';
import { Resume } from './Resume'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="flex-row">
          <div className="sidebar">
            <Link to={'/'}>RESUME</Link>
          </div>

          <div className="content">
            <Route path="/" component={Resume} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
