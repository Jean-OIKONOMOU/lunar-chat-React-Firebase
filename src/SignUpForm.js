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
      
        <div className="box column is-half">
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
                <p><em>Password must be at least 6 characters long.</em></p>
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
            <a role='button' onClick={this.props.goToLogin}>Or login instead?</a>
            <div className="field text-signUpForm">
              <div className="control has-text-centered">
                <label className="checkbox">
                  Check this box if you want also want to sign up for our
                  <b> awesome newsletter</b> !
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
