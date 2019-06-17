import React from "react";
import RoomsList from './RoomsList';

const SideBar = ({ logout, rooms, selectedRoom, setRoom, addRoom }) => {

  // Welcome Message
  // let title = e => {
  //   if (uid === null) {
  //     return <h1 className="px">Welcome to Lunar-Chat</h1>;
  //   } else {
  //     return <h1 className="px rainbow rainbow_text_animated">Welcome {uid}</h1>;
  //   }
  // };

  return (
    <div className="column is-3 hero is-danger px" >
      <RoomsList addRoom={addRoom} rooms={rooms} selectedRoom={selectedRoom} setRoom={setRoom}/>
      <div className="control px">
        <button className="is-fullwidth button" onClick={logout}>
          LOG ME OUT NOW!
        </button>
      </div>
    </div>
  );
};

export default SideBar;
