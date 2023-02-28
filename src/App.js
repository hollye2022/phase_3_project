import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import Home from './components/Home';


function App() {
  return (
    <div>
      {/* <Switch>

        <Route path="/home">
          <Home />
        </Route>

      <Route path="/activity/new" >
        <AddActivity />
      </Route>

      </Switch> */}
      <Home/>
     
    </div>
  );
}

export default App;
