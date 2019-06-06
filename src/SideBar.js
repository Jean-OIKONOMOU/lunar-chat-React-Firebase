import React, { Component } from "react";
import {cheese} from "./LoginForm";

class SideBar extends Component {
  render() {
    return (
      <div className="column is-3 hero is-danger has-text-centered">
        <h1>{cheese}</h1>
        <div className="control">
          <button className="is-fullwidth button" onClick={this.logout}>
            LOG ME OUT NOW!
          </button>
        </div>
      </div>
    );
  }
}

export default SideBar;
