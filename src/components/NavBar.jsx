import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function NavBar() {
  return (
    <>
      <header className="header top-0 bg-white shadow-md flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-2 sticky top-0 z-50">
        <h1 className="w-full sm:w-4/12 sm:mb-0">
          <a href="/">
            <img
              src="src\assets\images\logo.PNG"
              alt="logo"
              className="w-40 mx-auto sm:mx-0"
            />
          </a>
        </h1>
        <nav className="nav font-semibold text-lg flex-grow">
          <ul className="flex items-center justify-center sm:justify-end">
            <li className="p-4 b-2">
              <Link to="/home">Home</Link>
            </li>
            <li className="p-4 b-2">
              <Link to="/lab-entry">Lab Entry</Link>
            </li>
            <li className="p-4 b-2">
              <Link to="/component-issue">Component Issue</Link>
            </li>
          </ul>
        </nav>
        <div className="w-full sm:w-3/12 flex justify-center  sm:justify-end">
          <img
            src="src\assets\images\ict_logo2.png"
            alt="ICT"
            id="ict-logo"
            className="w-16  lg:mr-40"
          />
        </div>
      </header>
    </>
  );
}
