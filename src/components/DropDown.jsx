import React from "react";
import "../styles/dropdown.css";

const DropDown = () => {
  return (
    <>
      <div className="dropdown">
        <button className="dropdown-button">Select Option</button>
        <ul className="dropdown-content">
          <li selected>Location</li>
          <li>Department</li>
          <li>Infrastructure</li>
          <li>Name</li>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
