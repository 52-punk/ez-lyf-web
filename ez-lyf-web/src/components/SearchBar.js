import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div className="searchbar-container">
      <div className="pagename">{props.Name}</div>
      <div className="search-bar">
        <input type="text" placeholder="Enter the location" />
      </div>
      <div className="search-icon">
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}

export default SearchBar;
