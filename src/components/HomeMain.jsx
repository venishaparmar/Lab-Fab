import { useState, useEffect } from "react";
import "../styles/HomeMain.css";
import DropDown from "./DropDown";
import NavBar from "./NavBar";
import Homecard from "./Homecard";
import "../firebaseConfig";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import Loader from "./Loader";

export default function HomeMain() {
  const [firstDropdownValue, setFirstDropdownValue] = useState(null);
  const [secondDropdownValue, setSecondDropdownValue] = useState(null);
  const [secondDropdownOptions, setSecondDropdownOptions] = useState([]);
  const [isSearchInputDisabled, setIsSearchInputDisabled] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const db = getFirestore();
  const [storedValues, setStoredValues] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDataFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "resource-details"));
      const tmparray = [];
      querySnapshot.forEach((doc) => {
        // Include the ID along with other document data
        tmparray.push({ id: doc.id, ...doc.data() });
      });
      setStoredValues(tmparray);
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromFirestore();
  }, []);

  const searchFirestore = async (field, value) => {
    const db = getFirestore(); // Initialize Firestore
    let results = [];

    try {
      // Create a Firestore query based on the provided field and value
      const q = query(
        collection(db, "resource-details"),
        where(field, "==", value)
      );
      const querySnapshot = await getDocs(q);

      // Iterate over the query snapshot and extract the data
      querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      console.log(results);

      setStoredValues(results);
    } catch (error) {
      console.error("Error searching Firestore:", error);
    }
  };

  // Options for the first dropdown
  const firstDropdownOptions = [
    { label: "Name" },
    { label: "location" },
    { label: "Faculty" },
    { label: "Lab-Name" },
    { label: "Department" },
  ];

  // Function to handle selection in the first dropdown
  const handleFirstDropdownChange = (selectedOption) => {
    setFirstDropdownValue(selectedOption);

    setIsSearchInputDisabled(selectedOption.label !== "Name");

    switch (selectedOption.label) {
      case "location":
        setSecondDropdownOptions([
          { label: "MA109" },
          { label: "MA108" },
          { label: "MA107" },
        ]);
        break;
      case "Faculty":
        setSecondDropdownOptions([
          { label: "Faculty Of Technology" },
          { label: "Faculty Of Engineering" },
          { label: "Faculty Of Management" },
        ]);
        break;
      case "Department":
        setSecondDropdownOptions([
          { label: "Information and Communication Technology" },
          { label: "Computer Engineering" },
          { label: "Information Technology" },
        ]);
        break;
      case "Lab-Name":
        setSecondDropdownOptions([
          { label: "Microprocessor and Microcontroller Lab" },
          { label: "IOT and Com. Lab" },
          { label: "Web Development Lab" },
        ]);
        break;

      default:
        setSecondDropdownOptions([]);
    }
  };

  return (
    <>
      <NavBar />
      <div className="main">
        <div className="main-content">
          <h1 className="LabFabh1">Lab Fab</h1>
          <h3 className="SearchResourceh3">Search Resources Here</h3>
          <div className="relative flex items-center">
            <input
              type="search"
              className="bg-white shadow rounded border-0 p-3 pr-10"
              placeholder={
                isSearchInputDisabled
                  ? " Please Select Name Filter to Search "
                  : " Search by Name ..."
              }
              disabled={isSearchInputDisabled}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
            <svg
              version="1.1"
              className="h-4 text-dark absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer mr-3"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 52.966 52.966"
            >
              <path
                d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
      c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
      C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
      S32.459,40,21.983,40z"
              />
            </svg>
          </div>

          <div className="search-dropdown">
            {/* First Dropdown */}
            <DropDown
              label="Search Filter"
              options={firstDropdownOptions}
              onChange={handleFirstDropdownChange}
            />

            {/* Second Dropdown */}
            <DropDown
              label="Options"
              options={secondDropdownOptions}
              onChange={(selectedOption) => {
                setSecondDropdownValue(selectedOption);
              }}
            />
          </div>
          <button
            onClick={() => {
              if (firstDropdownValue && secondDropdownValue) {
                searchFirestore(
                  firstDropdownValue.label,
                  secondDropdownValue.label
                );
              } else if (searchQuery) {
                console.log(searchQuery);
                searchFirestore("name", searchQuery);
              }
            }}
            className="group relative overflow-hidden bg-blue-600 focus:ring-4 focus:ring-blue-300 inline-flex items-center px-7 py-2.5 rounded-lg text-white justify-center w-40 h-10"
          >
            Search
            <svg
              className="z-40 ml-2 -mr-1 w-3 h-3 transition-all duration-300 group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000"></div>
          </button>
        </div>
      </div>
      <h1 className="equipment-heading">
        {firstDropdownValue && secondDropdownValue
          ? `Search Results for ${firstDropdownValue.label} of ${secondDropdownValue.label}`
          : firstDropdownValue
          ? `Search Results for ${firstDropdownValue.label} of ${searchQuery}`
          : " All Equipments "}
      </h1>

      {loading ? <Loader /> : <Homecard dataValues={storedValues} />}
    </>
  );
}
