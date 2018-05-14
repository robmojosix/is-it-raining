import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: "initialised"
    };

    this.listenForData = this.listenForData.bind(this);
  }

  listenForData(message) {
    if (message.data.from === "monteux") {
      this.setState({
        data: JSON.stringify(message.data.payload)
      });
    }
  }

  componentDidMount() {
    // var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
    // if (origin !== "http://localhost:3000") {
    //   document.getElementsByClassName(".App").innerHTML = "falied";
    // }
    window.addEventListener(
      "message",
      message => this.listenForData(message),
      false
    );
  }

  render() {
    return <div className="App">{this.state.data}</div>;
  }
}

export default App;
