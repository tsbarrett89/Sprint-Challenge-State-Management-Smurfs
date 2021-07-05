import React, { Component } from "react";
import "./App.css";

import NewSmurfForm from './NewSmurfForm';
import SmurfGrid from './SmurfGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS</h1>
        <NewSmurfForm />
        <SmurfGrid />
      </div>
    );
  }
}

export default App;
