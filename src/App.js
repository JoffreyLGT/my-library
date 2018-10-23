import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import "bulma/css/bulma.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false };
    this.setLoggedIn = this.setLoggedIn.bind(this);
  }

  setLoggedIn = () => {
    // TODO Get the user infos that should come back here
    // TODO Insert the user infos in the state
    this.setState({ isLoggedIn: true });
  };
  render() {
    return (
      <Router>
        <div>
          {this.state ? (
            <Route
              exact
              path="/"
              render={() =>
                this.state.isLoggedIn ? (
                  <Redirect to="/home" />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          ) : (
            ""
          )}
          {/* TODO Send the user infos as a prop */}
          <Route
            path="/home"
            component={() =>
              this.state && this.state.isLoggedIn ? (
                <Home />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/login"
            component={() => (
              <Login
                isLoggedIn={this.state.isLoggedIn}
                onSuccess={this.setLoggedIn}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
