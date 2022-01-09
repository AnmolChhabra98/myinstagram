import React, { Component } from "react";
import "./SignUp.css";

export class SignUp extends Component {
  render() {
    return (
      <div>
        <input
          className="loginpage__text"
          placeholder="Mobile number or Email"
          type="text"
        ></input>
        <input
          className="loginpage__text"
          placeholder="Full Name"
          type="text"
        ></input>
        <input
          className="loginpage__text"
          placeholder="Username"
          type="text"
        ></input>
        <input
          className="loginpage__text"
          placeholder="Password"
          type="password"
        ></input>
        <button className="loginpage__button">Sign Up</button>
      </div>
    );
  }
}

export default SignUp;
