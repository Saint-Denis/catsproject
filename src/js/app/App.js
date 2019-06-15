import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./modules/header/Header";
import Favorites from "./modules/favorites/Favorites";
import RandomCat from "./modules/randomCat/RandomCat";
import Welcome from "./modules/welcome/Welcome";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          <main className="main-content">
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/random/" component={RandomCat} />
              <Route path="/favorites/" component={Favorites} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
