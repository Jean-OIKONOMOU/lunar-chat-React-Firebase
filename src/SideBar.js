import React, { Component } from "react";

class SideBar extends Component {


 title = e => {
    if (this.props.uid === null) {
      return <h1>Welcome to Lunar-Chat</h1>;
    } else {
      return (
        <h1>Welcome {this.props.uid}</h1>
      );
    }
  }

  render() {
    return (
      <div className="column is-3 hero is-danger has-text-centered">
        <h1>{this.title()}</h1>
        <div className="control">
          <button className="is-fullwidth button" onClick={this.props.logout}>
            LOG ME OUT NOW!
          </button>
        </div>
      </div>
    );
  }
}

export default SideBar;
