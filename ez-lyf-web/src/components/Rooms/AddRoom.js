import AddRoomForm from "./AddRoomForm";
import { useHistory } from "react-router-dom";
import "./AddRoom.css";

function AddRoom() {
  const history = useHistory();
  function addRoomHandler(roomData) {
    fetch(
      "https://ez-lyf-web-default-rtdb.firebaseio.com/room-data.json",

      {
        method: "POST",
        body: JSON.stringify(roomData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <div>
      <div className="div-title">
        <h1>Add Room</h1>
      </div>
      <AddRoomForm addRoom={addRoomHandler} />
    </div>
  );
}

export default AddRoom;
