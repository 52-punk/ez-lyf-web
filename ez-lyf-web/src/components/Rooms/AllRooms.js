import RoomList from "./RoomList";
import { useState } from "react";

function AllRooms() {
  const [loadedData, setLoadedData] = useState([]);
  fetch("https://ez-lyf-web-default-rtdb.firebaseio.com/room-data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const roomDatas = [];
      for (const key in data) {
        const roomData = {
          id: key,
          ...data[key],
        };
        roomDatas.push(roomData);
      }
      setLoadedData(roomDatas);
    });

  return <RoomList roomData={loadedData} />;
}

export default AllRooms;
