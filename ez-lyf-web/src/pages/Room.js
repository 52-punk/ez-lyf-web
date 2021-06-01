import Card from "../components/Card";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import "./Room.css";

function Room(props) {
  const turnOff = () => {};

  return (
    <div className="room-container" onClick={turnOff}>
      <div className="desc-image">
        <img src={props.roomImage} alt="Image" />
      </div>
      <div className="desc-title">
        <h1>{props.roomTitle}</h1>
      </div>
      <div className="desc-address">
        <p>{props.roomAdd}</p>
      </div>
      <div className="desc-desc">
        <p>{props.roomDesc}</p>
      </div>
    </div>
  );
}

export default Room;
