import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Preview from './Preview';

function App() {
  return (
    <div className="app">
      <Router>
      <div className="app__body">       
        <Switch>
        <Route exact path="/">
            <WebcamCapture />
          </Route>
          <Route exact path="/preview">
            <Preview />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
