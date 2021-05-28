import RoomList from "./RoomList";
import { useState, useEffect } from "react";
import Loading from "../../ui/Loading";

function AllRooms(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
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
        setIsLoading(false);
        setLoadedData(roomDatas);
      });
  }, []);

  return isLoading ? <Loading /> : <RoomList roomData={loadedData} />;
}

export default AllRooms;
