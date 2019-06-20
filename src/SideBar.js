import React from "react";
import RoomsList from './RoomsList';

const SideBar = ({ logout, rooms, selectedRoom, setRoom, addRoom, isLoggedIn, email }) => {

  return (
    <div className="column is-3 hero is-danger px" >
      <RoomsList addRoom={addRoom} rooms={rooms} selectedRoom={selectedRoom} setRoom={setRoom}/>
      <div className="control px">
      <div className="px has-text-centered">{isLoggedIn ? <p>Logged in as {email}</p> : <p>Not logged in yet.</p>}</div>
        <button className="is-fullwidth button" onClick={logout}>
          LOG ME OUT NOW!
        </button>
      </div>
    </div>
  );
};

export default SideBar;
