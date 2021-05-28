import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const searchValue = useRef();

  function keyDownHandler(event) {
    if (event.keyCode === 13) {
      var search_input = document.getElementById("search").value;
      console.log(`${search_input}`);
      document.getElementById("search").value = "";
    }
  }

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
              id="search"
              type="text"
              placeholder="Enter the location"
              ref={searchValue}
              onKeyDown={keyDownHandler}
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
