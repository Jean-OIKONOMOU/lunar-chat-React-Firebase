import React, { Component } from "react";
// import "./index.css";

class SignUpForm extends Component {
  state = {
    email: "",
    password: ""
  };

  updateEmail = e => {
    this.setState({
      email: e.target.value
    });
    
  };

  updatePassword = e => {
    this.setState({
      password: e.target.value
    });
    
  };

onSubmit = e => {
  e.preventDefault();
  this.props.handleSignUp(this.state);
  this.setState({
    email: '',
    password: '',
  })
}

  render() {
    
    return (
      <div>
        <h1 className="elegant">Sign Up Form</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className="form"
            placeholder="Your email here."
            type="email"
            htmlFor="email"
            onChange={this.updateEmail}
            value={this.state.email}
          />
          <input
            className="form"
            placeholder="Password"
            type="password"
            htmlFor="password"
            onChange={this.updatePassword}
            value={this.state.password}
          />
          <button className="form button" type="submit">
            Sign Up
          </button>
          <p>{this.props.text}</p>
          <label className="newsletter-container">
            Check this box if you want also want to sign up for our <b>awesome newsletter</b> !
            <input type="checkbox" onChange={this.props.newsletter} />
          </label>
        </form>
      </div>
    );
  }
}

export default SignUpForm;