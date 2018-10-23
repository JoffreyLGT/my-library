import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { fakeAccounts } from "./../FakeServerData";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.checkLogin = this.checkLogin.bind(this);
    this.onSuccess = this.props.onSuccess.bind(this);
  }

  checkLogin(){
    // TODO Check the user login
    // TODO Send back the user info to the app
    this.onSuccess();
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect push to="/" />;
    }
    return (
      <div class="columns is-three-quarters-mobile">
        <div class="column is-half is-offset-one-quarter">
          <div className="box notification">
            <h1 className="header__title">My library</h1>
            <div style={{ margin: "30px 0 10px" }} />
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button
                  className="input button is-info"
                  onClick={this.checkLogin}
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
