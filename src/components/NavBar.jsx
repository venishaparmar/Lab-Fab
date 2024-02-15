import "../styles/navbar.css";
const NavBar = () => {
  return (
    <>
      <header className="header top-0 bg-white shadow-md flex items-center justify-between px-60 py-02">
        <h1 className="w-3/12">
          <a href>
            <img src="src\assets\images\logo.PNG" alt="logo" className="w-40" />
          </a>
        </h1>
        <nav className="nav font-semibold text-lg">
          <ul className="flex items-center">
            <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active">
              <a href>Home</a>
            </li>
            <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
              <a href="search.html">Search Resources</a>
            </li>
            <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
              <a href>Project</a>
            </li>
          </ul>
        </nav>
        <div className="w-3/12 flex justify-end">
          <img src="src\assets\images\ict_logo2.png" alt="ICT" id="ict-logo" />
        </div>
      </header>
    </>
  );
};

export default NavBar;
