import "./Landing_page.css";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import AllRooms from "../components/Rooms/AllRooms";

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
    </div>
  );
}

export default LandingPage;
