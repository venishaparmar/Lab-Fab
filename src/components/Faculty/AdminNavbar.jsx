import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import MuLogo from "../../assets/images/mu-logo.png";
import IctLogo from "../../assets/images/ictlogo.png";

const AdminNavbar = () => {
  return (
    <div>
        <header className="header top-0 bg-white shadow-md flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-1 sticky top-0 z-50">
        <div className="logo w-full sm:w-4/12 sm:mb-0">
          <a href="/admin-home">
          <img src={MuLogo} alt="logo" className="w-50 mx-0 sm:mx-5" />
          </a>
          <a href="/">
            <img
              src={IctLogo}
              alt="ICT"
              id="ict-logo"
              className="w-30  lg:mr-30"
            />
          </a>
        </div>
        
        <nav className="nav font-semibold text-lg flex-grow">
        <ul className="flex">
            <li className="p-4 b-2">
              <Link to="/AdminHome">Home</Link>
            </li>
            <li className="p-4 b-2">
              <Link to="/labs">Labs</Link>
            </li>
            {/* <li className="p-4 b-2 flex-shrink-0">
              <Link to="/lab-entry">Lab Entry</Link>
            </li> */}
            <li className="p-4 b-2">
              <Link to="/component-request-review">Issue Request</Link>
            </li>
            <li className="p-4 b-2">
              <Link to="/add-component">Components</Link>
            </li>

          </ul>
        </nav>

        <div className="w-full sm:w-3/12 flex justify-center  sm:justify-end">

          {/* {isLoggedIn && (
            <button
              onClick={handleLogout}
              type="button"
              className="btn btn-info mb-3 mr-3"
              style={{ backgroundColor: '#14a2b9', width: '100px' }}
            >
              Logout
            </button>
          )} */}
        </div>
      </header>
      
    </div>
  )
}

export default AdminNavbar


