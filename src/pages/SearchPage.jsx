import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import DropDown from "../components/DropDown";

const SearchPage = () => {
  return (
    <>
      <NavBar />
      <div className="searchMenu mt-4">
        <SearchBar />
        <DropDown />
        <DropDown />
      </div>
    </>
  );
};

export default SearchPage;
