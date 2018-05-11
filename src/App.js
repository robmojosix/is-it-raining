import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    document.domain = 'localhost';

    const postMessage = () => {
      window.top.postMessage("Yo", "http://localhost:3000");
    };

    window.onmessage = function(e){
      console.log('*******', e);
    };

    return (
      <div className="App">
        <button onClick={ postMessage }>EXPORT</button>
      </div>
    );
  }
}

export default App;
