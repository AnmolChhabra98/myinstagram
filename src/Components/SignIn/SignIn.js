import React, { Component } from "react";
import "../LoginPage/LoginPage.css";

export class SignIn extends Component {
  render() {
    return (
      <div>
        <input
          className="loginpage__text"
          placeholder="Phone number, username, or email"
          type="text"
        ></input>
        <input
          className="loginpage__text"
          placeholder="Password"
          type="password"
        ></input>
        <button className="loginpage__button">Log In</button>
      </div>
    );
  }
}

export default SignIn;
