import React, { Component } from "react";
import "./App.css";
import { Header } from "../Header";
import { About } from "../About";
import { Resume } from "../Resume";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
      </div>
    );
  }
}
