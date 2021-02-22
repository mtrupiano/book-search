import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";

import Saved from './pages/Saved';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={['/', '/search']}>
            <Search />
          </Route>
          <Route exact path={['/saved']}>
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
