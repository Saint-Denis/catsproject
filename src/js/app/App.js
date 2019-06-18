import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./modules/header/Header";
import Favorites from "./modules/favorites/Favorites";
import Cats from "./modules/cats/Cats";
import Welcome from "./modules/welcome/Welcome";
import SignIn from "./modules/auth/SignIn";
import SignUp from "./modules/auth/SignUp";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          <main className="main-content">
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/random/" component={Cats} />
              <Route path="/favorites/" component={Favorites} />
              <Route path="/signin/" component={SignIn} />
              <Route path="/signup/" component={SignUp} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
