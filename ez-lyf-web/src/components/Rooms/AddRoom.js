import AddRoomForm from "./AddRoomForm";
import { useHistory } from "react-router-dom";

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
      <h1>Add Room</h1>
      <AddRoomForm addRoom={addRoomHandler} />
    </div>
  );
}

export default AddRoom;
