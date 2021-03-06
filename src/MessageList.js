import React from "react";
import moment from "moment";

const Message = ({ message }) => {
  return (
    <li>
      <div className="columns">
        <p className="column is-three-quarters">{message.text}</p>
        <div className="column">
          <p className="is-size-7 is-light">
            {message.email} <b>//</b>{" "}
            {moment(message.created).format("MMMM Do YYYY, h:mm:ss a")}
          </p>
        </div>
      </div>
    </li>
  );
};

const MessageList = ({ messages }) => {
  return (
    <div id="style-4" className="list">
      <ul style={{ width: "auto", height: "80vh" }}>
        {Object.keys(messages)
          .map(messageKey => ({ ...messages[messageKey], id: messageKey }))
          .map(message => (
            <Message key={message.id} message={message} />
          ))}
      </ul>
    </div>
  );
};

export default MessageList;
