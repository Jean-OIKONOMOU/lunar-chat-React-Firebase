import React, { Component } from "react";
// import "./index.css";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  updateEmail = e => {
    this.setState({
      email: e.target.value
    });
    // console.log(this.state.email);
  };

  updatePassword = e => {
    this.setState({
      password: e.target.value
    });
    // console.log(this.state.password);
  };

  login = e => {
    e.preventDefault();
    this.props.handleLogin(this.state);
    this.setState({
      email: "",
      password: ""
    });
    if (
      this.state.email === "spinthewheel@gmail.com" &&
      this.state.password === "spinthewheel"
    ) {
      alert("A WORTHY SACRIFICE FOR THE WHEEL");
    }
  };

  render() {
    return (
      
        <div className="box">
          <h1 className="title">Login Form</h1>
          <form onSubmit={this.login}>

            <div className="field">
              <div className="control">
                <input
                  className="input"
                  placeholder="\./Email\./"
                  type="email"
                  htmlFor="email"
                  value={this.state.email}
                  onChange={this.updateEmail}
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input
                  className="input"
                  placeholder="\./Password\./"
                  type="password"
                  htmlFor="password"
                  value={this.state.password}
                  onChange={this.updatePassword}
                />
              </div>
            </div>

            <button className="button is-fullwidth is-danger" type="submit">
              Login
            </button>
            <p>{this.props.text}</p>
          </form>
        </div>
       
    );
  }
}

export default LoginForm;
export const cheese = "A R T - N O U V E A U";
