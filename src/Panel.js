import React from "react";

const Panel = props => {
  return (
    <div className="column hero">
      <div className="hero-body">
        <div className="columns is-centered">
          <div className="column is-half">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
