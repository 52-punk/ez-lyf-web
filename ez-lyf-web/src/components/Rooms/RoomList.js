import RoomItem from "./RoomItem";
import "./RoomList.css";
function RoomList(props) {
  return (
    <ul className="list">
      {props.roomData.map((roomData) => (
        <RoomItem
          key={roomData.id}
          id={roomData.id}
          title={roomData.title}
          image={roomData.image}
          address={roomData.address}
          description={roomData.description}
        />
      ))}
    </ul>
  );
}

export default RoomList;
