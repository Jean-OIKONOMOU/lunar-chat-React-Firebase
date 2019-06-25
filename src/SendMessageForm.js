import React, { Component } from "react";
// basically we have to update the state when a message is posted.
class SendMessageForm extends Component {
  state = {
    text: ""
  };

  onMessageSend = e => {
    e.preventDefault();
    const message = {
      author: this.props.uid,
      email: this.props.email,
      roomId: this.props.roomId,
      text: this.state.text,
      created: Date.now()
    }
    this.props.sendMessage(message);
    this.setState({text: ''});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onMessageSend}>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input"
                placeholder="Type your message here."
                type="text"
                value={this.state.text}
                onChange={e => this.setState({ text: e.target.value })}
              />
            </div>
            <div className="control">
              <button type="submit" className="button is-danger" title="Send message">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SendMessageForm;
