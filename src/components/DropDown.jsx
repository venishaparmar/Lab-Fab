import React, { useState } from "react";

const DropDown = ({ label, options, onChange }) => {
  const handleOptionChange = (selectedOption) => {
    onChange(selectedOption);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest("#dropdown-button") &&
      !event.target.closest("#dropdown-menu")
    ) {
      setIsDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left mt-4">
      <button
        id="dropdown-button"
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
        onClick={toggleDropdown}
      >
        {label}
      </button>
      <div
        id="dropdown-menu"
        className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
          isDropdownOpen ? "" : "hidden"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown-button"
      >
        <div className="py-2 p-2">
          {options.map((option, index) => (
            <button
              key={index}
              className="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer mt-1"
              onClick={() => handleOptionChange(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
