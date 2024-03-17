import "../styles/HomeMain.css";
import { ImSearch } from "react-icons/im";
<<<<<<< HEAD
import DropDown from "./DropDown";
import Homecard from "./Homecard";
=======

import DropDown from "./DropDown";

import Homecard from "./Homecard";

>>>>>>> 9676a90838ea9bce28fdc0ff88280f581b8ca230

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
      <Homecard />
    </>
  );
}
