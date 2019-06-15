import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./modules/header/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
      </Router>
    );
  }
}

export default hot(module)(App);
