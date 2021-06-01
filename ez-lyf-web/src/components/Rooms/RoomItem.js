import Room from "../../pages/Room";
import Card from "../Card";
import "./RoomItem.css";
import { useState } from "react";

function RoomItem(props) {
  const [itemClicked, setItemClicked] = useState(false);
  const clickhandler = () => {
    setItemClicked(true);
    // var element = document.getElementById("item");
    // element.classList.add("overlay");
  };

  // return itemClicked ? (
  //   <Room
  //     roomTitle={props.title}
  //     roomDesc={props.description}
  //     roomAdd={props.address}
  //     roomImage={props.image}
  //   />
  // ) : (
  return (
    <li id="item" onClick={clickhandler}>
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
