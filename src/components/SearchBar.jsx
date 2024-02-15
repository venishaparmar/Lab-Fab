import "../styles/searchbar.css";

const SearchBar = () => {
  return (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button">Search</button>
      </div>
    </>
  );
};

export default SearchBar;
