import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./modules/header/Header";
import Favourites from "./modules/favorites/Favourites";
import Cats from "./modules/cats/Cats";
import Welcome from "./modules/welcome/Welcome";
import SignIn from "./modules/auth/SignIn";
import SignOut from "./modules/auth/SignOut";

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
              <Route path="/favorites/" component={Favourites} />
              <Route path="/signIn/" component={SignIn} />
              <Route path="/signOut/" component={SignOut} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
