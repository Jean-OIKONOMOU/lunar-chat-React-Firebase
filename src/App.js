import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm, { cheese } from "./LoginForm";
import "./index.css";

import { auth } from "./fire";
// const foodRef = firebaseApp.database().ref("foods");
// foodRef.push({
//   name: "Pizza",
//   price: 10.0,
//   color: "louise"
// });

// console.log(firebaseApp.auth());

// auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
// .then(response => console.log(response))
// .catch(err => console.error(err))

class App extends Component {
  state = {
    hasSignedUp: false,
    isLoggedIn: false,
    email: "",
    newsletter: false,
    text: ""
  };

  // delete = e => {
  //   foodRef.delete()
  // };

  handleSignUp = ({email, password}) => {
    alert("Thanks for signing up " + email + " !\nPlease check your email to verify your account.");
    auth.createUserWithEmailAndPassword(email, password)
        // .then(user => console.log(user))
        .catch(err => this.setState({
          text: err.message
        })
      )
  };

  handleLogin = ({email, password}) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user)
          alert('YOU MAY PASS.')
          this.setState({
            isLoggedIn: true,
            email: email,
            password: password,
          });
        })
        .catch(err => {
          err.code === "auth/wrong-password" ? alert("Incorrect username // password.") : alert('An unknown error has occurred.');
        })
    };

  newsletter = e => {
    this.setState(state => {
      // I'm making a backup of the state in a const called newState so as not to change the State.
      const newState = Object.assign({}, state);
      newState.newsletter = !newState.newsletter;
      return newState;
    });
  };

  render() {
    return (
      <div>
        <div className="App">
          <pre>{JSON.stringify(this.state, null, 3)}</pre>
        </div>
        <h1>{cheese}</h1>
        <div className="container">
          <div className="row">
            <SignUpForm
              handleSignUp={this.handleSignUp}
              newsletter={this.newsletter}
              text={this.text}
              salut={this.salut}
            />
            <LoginForm handleLogin={this.handleLogin} text={this.text}/>
            {/* <button onClick={this.delete}>SALUT</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
