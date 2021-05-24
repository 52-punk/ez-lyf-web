import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div className="header-container">
      <div className="component-container">
        <div className="logo-conatainer">
          <Link to="/">
            <div className="logo">Ez-LYF</div>
          </Link>
        </div>
        <div className="search-bar-container">
          <div className="search-bar">
            <input
              className="search"
              type="text"
              placeholder="Enter the location"
            />
          </div>
        </div>
        <div className="more-option-container">
          <Link to="profile">
            <div className="profile">
              <i className="fas fa-user-circle" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
