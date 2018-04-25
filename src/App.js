import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    document.domain = `${window.location.protocol}${window.location.hostname}${window.location.port ? ':'+window.location.port : ''}`;

    const postMessage = () => {
      window.top.postMessage("Yo", "http://localhost:3000");
    };

    return (
      <div className="App">
        <h1>IS IT RAINING?</h1>
        <h1>MAYBE?</h1>
        <button onClick={ postMessage }>CLICK ME!</button>
      </div>
    );
  }
}

export default App;
