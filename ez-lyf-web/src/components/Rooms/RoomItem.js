import Card from "../Card";
import "./RoomItem.css";

function RoomItem(props) {
  return (
    <li className="item">
      <Card>
        <div className="image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="content">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <address>{props.address}</address>
        </div>
        <div className="favorite">
          <i class="fas fa-check-circle"></i>
        </div>
      </Card>
    </li>
  );
}

export default RoomItem;
