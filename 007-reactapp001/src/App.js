import React, { Component } from "react";
import "./App.css"
import welcome from './components/Welcom'
import Welcome from "./components/Welcom";

class FirstComponent extends Component {
  render() {
    const name = "You";

    return (
      <div>
        <h1>Salam {name}</h1>
         <Welcome name="Maktabkhone" />
      </div>
    );
  }
}

export default FirstComponent;
