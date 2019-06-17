import React, { Component } from "react";

class AddRoomForm extends Component {
  state = {
    roomId: null,
    roomName: ""
  };

  handleAddRoom = (e) => {
    e.preventDefault();
    this.props.addRoom(this.state.roomName);
    this.setState({roomName: ''});
  };

  render() {
    return (
      <form onSubmit={this.handleAddRoom}>
        <div className="control" />
        <h1>Choose a name for your room.</h1>
        <input
          type="text"
          value={this.state.roomName}
          placeholder="Room name"
          className="input"
          onChange={e => this.setState({ roomName: e.target.value })}
        />
      </form>
    );
  }
}

export default AddRoomForm;
