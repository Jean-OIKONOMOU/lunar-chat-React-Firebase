import React from "react";
import AddRoomForm from './AddRoomForm';

// Single Room Component
const Room = ({ room, selectedRoom, setRoom }) => {
  const styles = selectedRoom === room.id ? 'active-room' : 'room'
  return (
    <li >
      <a className={styles} onClick={() => setRoom(room.id)}>{room.name}</a>
    </li>
  );
};

// RoomList Component. This builds a bunch of room components.
const RoomsList = ({ addRoom, rooms, selectedRoom, setRoom }) => {
  return (
    <aside className="menu px">
      <h1 className="title">Lunar Threads</h1>
      <ul className="menu-list roomList">          
            {Object.keys(rooms)
              .map(roomKey => ({ ...rooms[roomKey], id: roomKey }))
              .map(roomObj => (
                <Room key={roomObj.id} room={roomObj} selectedRoom={selectedRoom} setRoom={setRoom}/>
              ))}
      </ul>
      <div style={{marginTop: '30px'}}>
        <p className='is-size-5 has-text-white menu-label'>Add a room</p>
        <AddRoomForm addRoom={addRoom}/>
      </div>
    </aside>
  );
};

export default RoomsList;
