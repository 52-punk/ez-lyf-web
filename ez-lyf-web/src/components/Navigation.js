import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation-container">
      <div className="room-icon container">
        <Link to="/rooms">
          <i className="fas fa-home icon" />
        </Link>
      </div>
      <div className="food-icon container">
        <Link to="/food">
          <i className="fas fa-utensils icon" />
        </Link>
      </div>
      <div className="market-icon container">
        <Link to="/market">
          <i className="fas fa-map-marker-alt icon" />
        </Link>
      </div>
      <div className="notes-icon container">
        <Link to="/notes">
          <i className="fas fa-book-open icon" />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
