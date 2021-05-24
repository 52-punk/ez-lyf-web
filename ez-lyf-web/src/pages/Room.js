import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import "./Room.css";

function Room() {
  return (
    <div className="room-container">
      <Navigation />
      <SearchBar Name="Rooms" />
    </div>
  );
}

export default Room;
