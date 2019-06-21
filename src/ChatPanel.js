import React, { useState, useEffect } from "react";
import SendMessageForm from "./SendMessageForm";
import MessageList from "./MessageList";

const ChatPanel = props => {

  return (
    <div className="column is-three-quarters has-text-white-bis">
      <MessageList messages={props.messages} />
      <SendMessageForm
        roomId={props.roomId}
        uid={props.uid}
        email={props.email}
        sendMessage={props.sendMessage}
      />
    </div>
  );
};

export default ChatPanel;
