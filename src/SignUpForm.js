import React, { Component } from "react";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    username: ""
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

  // updateUsername = e => {
  //   this.setState({
  //     username: e.target.value
  //   });

  // };

  onSubmit = e => {
    e.preventDefault();
    this.props.handleSignUp(this.state);
    this.setState({
      email: "",
      password: ""
      // username: ''
    });
  };

  render() {
    return (
      
        <div className="box">
          <h1 className="title">Sign Up Form</h1>
          <form onSubmit={this.onSubmit}>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  placeholder="Your email here."
                  type="email"
                  htmlFor="email"
                  onChange={this.updateEmail}
                  value={this.state.email}
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input
                  className="input"
                  placeholder="Password"
                  type="password"
                  htmlFor="password"
                  onChange={this.updatePassword}
                  value={this.state.password}
                />
              </div>
            </div>

            {/* <input
            className="form"
            placeholder="Display name"
            type="text"
            htmlFor="username"
            onChange={this.updateUsername}
            value={this.state.username}
          /> */}
            <button className="button is-fullwidth is-danger" type="submit">
              Sign Up
            </button>

            <div className="field text-signUpForm">
              <div className="control">
                <label className="checkbox">
                  Check this box if you want also want to sign up for our{" "}
                  <b>awesome newsletter</b> !
                  <input
                    type="checkbox"
                    className="input-signUpForm"
                    onChange={this.props.newsletter}
                  />
                </label>
              </div>
            </div>
          </form>
        </div>
      
    );
  }
}

export default SignUpForm;
