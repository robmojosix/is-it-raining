import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const postMessage = () => {
      top.postMessage("Yo", "http://localhost");
    };

    return (
      <div className="App">
        <h1>IS IT RAINING?</h1>
        <h1>MAYBE?</h1>
        <button onClick={ postMessage }>CLICK ME</button>
      </div>
    );
  }
}

export default App;
