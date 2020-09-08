import React, { Component } from "react";
import B from "./B";
import C from "./C";

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Here is App</h2>
        <B />
        <C />
      </div>
    );
  }
}
