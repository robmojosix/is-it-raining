import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    // document.domain = 'localhost';

    // const postMessage = () => {
    //   window.top.postMessage("Yo", "http://localhost:3000");
    // };

    // window.onmessage = function(e){
    //   console.log('*******', e);
    // };

    window.addEventListener(
      "message",
      function(event) {
        var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
        if (origin !== "http://localhost:3000") {
          console.log("Wrong domain");
          return;
        }
        console.log("event.data", event.data);
      },
      false
    );

    return (
      <div className="App">
        <button onClick={postMessage}>EXPORT</button>
      </div>
    );
  }
}

export default App;
