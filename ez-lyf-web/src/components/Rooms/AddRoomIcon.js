import "./AddRoomIcon.css";
import { Link } from "react-router-dom";
import AddRoomForm from "./AddRoomForm";

function AddRoomIcon() {
  return (
    <div className="add-icon-container">
      <Link to="/add-room">
        <i class="fas fa-plus-circle"></i>
      </Link>
    </div>
  );
}

export default AddRoomIcon;
