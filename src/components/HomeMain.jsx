import "../styles/HomeMain.css";
import { ImSearch } from "react-icons/im";
<<<<<<< HEAD
import DropDown from "./DropDown";
=======
import Homecard from "./Homecard";
>>>>>>> 140625f6f3dcbfff0c27281c6a101909ea3fc0e3

export default function HomeMain() {
  return (
    <>
    <div className="main">
      <div className="main-content">
        <h1 className="LabFabh1">Lab Fab</h1>
        <h3 className="SearchResourceh3">Search Resources Here</h3>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search Your Resource"
          />
          <button className="search-button">
            <ImSearch />
          </button>
        </div>
        <DropDown />
      </div>
    </div>
    <Homecard/>
    </>
  );
}
