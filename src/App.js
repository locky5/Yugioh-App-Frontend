import React from 'react';
import logo from './logo.svg';
import './App.css';
import YugiohContainer from './YugiohContainer'
import CardDetails from './CardDetails'
import { BrowserRouter, Router, Route, Link, Switch, Redirect } from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <YugiohContainer/>}/>
          <Route exact path="/cards/:id" render={() => <CardDetails/>}/>
        </Switch>
      </div>
    )
  }
}

export default App
