import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation-container">
      <Link to="/rooms">
        <i className="fas fa-home icon" />
      </Link>
      <Link to="/food">
        <i className="fas fa-utensils icon" />
      </Link>
      <Link to="/market">
        <i className="fas fa-map-marker-alt icon" />
      </Link>
      <Link to="/notes">
        <i className="fas fa-book-open icon" />
      </Link>
    </div>
  );
}

export default Navigation;
