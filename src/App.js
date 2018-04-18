import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IS IT RAINING?</h1>
        <h1>YES</h1>
        <iframe data-test="IFRAME-ATTRIBUTE" src="https://www.w3schools.com"></iframe>
      </div>
    );
  }
}

export default App;
