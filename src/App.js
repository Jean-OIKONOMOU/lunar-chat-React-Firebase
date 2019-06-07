import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm, { cheese } from "./LoginForm";
import SideBar from "./SideBar";
import "bulma";
import { auth } from "./fire";
import Panel from "./Panel";

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
    password: null,
    newsletter: false,
    uid: null,
    username: ""
  };

  // delete = e => {
  //   foodRef.delete()
  // };

  handleSignUp = ({ email, password }) => {
    alert(
      "Thanks for signing up " +
        email +
        " !\nPlease check your email to verify your account."
    );
    auth.createUserWithEmailAndPassword(email, password).catch(err =>
      this.setState({
        text: err.message
      })
    );
  };

  handleLogin = ({ email, password }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        // alert('YOU MAY PASS.');
        console.log(auth.currentUser.uid);
        const uid = auth.currentUser.uid;
        const userEmail = auth.currentUser.email;
        this.setState({
          isLoggedIn: true,
          email: userEmail,
          password: password,
          uid: uid
        });
        console.log(this.state);
      })
      .catch(err => {
        err.code === "auth/wrong-password"
          ? alert("Incorrect username // password.")
          : alert("An unknown error has occurred.");
      });
  };

  logout = e => {
    auth.signOut().then(() => {
      this.setState({
        email: "",
        uid: null,
        isLoggedIn: false
      });
    });
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
      <div className="columns vh-100">
        <SideBar logout={this.logout} uid={this.state.uid} />
        <Panel>
          <SignUpForm
            handleSignUp={this.handleSignUp}
            newsletter={this.newsletter}
          />
          <LoginForm handleLogin={this.handleLogin} />
        </Panel>
      </div>
    );
  }
}

export default App;
