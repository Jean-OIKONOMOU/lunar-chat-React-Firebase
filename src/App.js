import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import SideBar from "./SideBar";
import "bulma";
import { auth, messageRef, roomRef } from "./fire";
import Panel from "./Panel";
import ChatPanel from "./ChatPanel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
class App extends Component {
  state = {
    hasSignedUp: false,
    isLoggedIn: false,
    wantsToLogIn: false,
    email: "",
    password: null,
    newsletter: false,
    uid: null,
    username: "",
    rooms: {},
    selectedRoom: null,
    messages: {}
  };

  loadData = () => {
    console.log(JSON.stringify(this.state, null, 2));
    roomRef
      .once("value")
      .then(snapshot => {
        // fetching a snapshot of the data from the Firebase API.
        const rooms = snapshot.val();
        // General room is selected by default with this next line of code.
        const selectedRoom = Object.keys(rooms)[0];
        // Putting that data in the state of our App.
        this.setState({
          rooms: rooms,
          selectedRoom: selectedRoom
        });
        // Show messages whose rommId is equal to the current selectedRoom using special Firebase functions.
        return messageRef
          .orderByChild("roomId")
          .equalTo(selectedRoom)
          .once("value")
          
      })
      
      .then(snapshot => {
        const messages = snapshot.val() || {};
        this.setState({
          messages: messages
        });
      })
      .catch(err => console.error(err));
  };
  
  componentDidMount() {
    // Persist the login.
    auth.onAuthStateChanged(user => {
      if (user) {
        const { email, uid } = user;
        this.setState({
          email,
          uid,
          isLoggedIn: true
        });
        this.loadData();
      }
    });
    this.loadData();
    // Event listener for the list of rooms. Prevents the need to refresh to fetch the new data.
    roomRef.on("value", snapshot => {
      const rooms = snapshot.val();
      console.log(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
      this.setState({
        rooms: rooms
      });
      
      // Event listener to keep the page from refreshing when a new messages is posted. It has to merge it with the preexisting messages in the room.
      messageRef.on("child_added", snapshot => {
        const messages = snapshot.val() ;
        const key = snapshot.key;
        // console.log(key);
        if (messages.roomId === this.state.selectedRoom) {
          this.setState({
            messages: {
              ...this.state.messages,
              [key]: messages
            }
          });
        }
      });
    });
  }

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
        const uid = auth.currentUser.uid;
        const userEmail = auth.currentUser.email;
        this.setState({
          isLoggedIn: true,
          email: userEmail,
          password: password,
          uid: uid
        });
      })
      .catch(err => {
        console.log(err);
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
        isLoggedIn: false,
        rooms: {}
      });
    });
  };

  newsletter = e => {
    this.setState(state => {
      // Backup of the state in a const called newState so as not to change the State.
      const newState = Object.assign({}, state);
      newState.newsletter = !newState.newsletter;
      return newState;
    });
  };

 
  setRoom = id => {
    messageRef
      .orderByChild("roomId")
      .equalTo(id)
      .once("value")
      .then(snapshot => {
        // If there are no messages then send an empty object to State.
        const messages = snapshot.val() || {};
        this.setState({
          selectedRoom: id,
          messages: messages
        });
      })
      .catch(err => console.error(err));
  };

  sendMessage = message => {
    messageRef.push(message);
  };

  addRoom = roomName => {
    const room = {
      name: roomName,
      author: this.state.uid,
      created: Date.now()
    };
    roomRef.push(room);
    this.loadData();
  };

  render() {
    return (
      <div className="columns vh-100 is-gapless">
        <SideBar
          all={this.state}
          logout={this.logout}
          rooms={this.state.rooms}
          selectedRoom={this.state.selectedRoom}
          uid={this.state.uid}
          setRoom={this.setRoom}
          addRoom={this.addRoom}
          isLoggedIn={this.state.isLoggedIn}
          email={this.state.email}
        />

        {this.state.isLoggedIn ? (
          <Panel>
            <ChatPanel
              messages={this.state.messages}
              roomId={this.state.selectedRoom}
              uid={this.state.uid}
              email={this.state.email}
              sendMessage={this.sendMessage}
            />
          </Panel>
        ) : (
          <Panel>
            {this.state.wantsToLogIn ? (
              <LoginForm
                handleLogin={this.handleLogin}
                goToSignUp={() => this.setState({ wantsToLogIn: false })}
              />
            ) : (
              <SignUpForm
                handleSignUp={this.handleSignUp}
                newsletter={this.newsletter}
                goToLogin={() => this.setState({ wantsToLogIn: true })}
              />
            )}
          </Panel>
        )}
      </div>
    );
  }
}

export default App;
