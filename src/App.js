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

  listenForData(event) {
    console.log(event);
    this.setState({
      data: JSON.stringify(event.data)
    });
  }

  componentDidMount() {
    // var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
    // if (origin !== "http://localhost:3000") {
    //   document.getElementsByClassName(".App").innerHTML = "falied";
    // }
    window.addEventListener(
      "message",
      event => this.listenForData(event),
      false
    );
  }

  render() {
    return <div className="App">{this.state.data}</div>;
  }
}

export default App;
