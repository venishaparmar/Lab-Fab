import "../styles/HomeMain.css";
import { ImSearch } from "react-icons/im";
import Homecard from "./Homecard";

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
        </div>
      </div>
      <Homecard />
    </>
  );
}
