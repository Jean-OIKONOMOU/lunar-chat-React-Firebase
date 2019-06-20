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
        {/* <input
          type="text"
          value={this.state.roomName}
          placeholder="Room name"
          className="input"
          onChange={e => this.setState({ roomName: e.target.value })}
        /> */}
        <div className="field has-addons">
            <div className="control is-expanded">
              <input
                type="text"
          value={this.state.roomName}
          placeholder="Type your room name."
          className="input"
          onChange={e => this.setState({ roomName: e.target.value })}
              />
            </div>
            <div className="control">
              <button type="submit" className="button is-black">
                Add
              </button>
            </div>
          </div>
      </form>
    );
  }
}

export default AddRoomForm;
