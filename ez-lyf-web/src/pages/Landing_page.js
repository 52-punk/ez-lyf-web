import "./Landing_page.css";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import AllRooms from "../components/Rooms/AllRooms";
import AddRoomIcon from "../components/Rooms/AddRoomIcon";

function LandingPage() {
  return (
    <div>
      <div className="header-navigation-container">
        <Header />
        <Navigation />
      </div>
      <div className="content-page">
        <AllRooms />
      </div>
      <div className="footer-part">
        <AddRoomIcon />
      </div>
    </div>
  );
}

export default LandingPage;
