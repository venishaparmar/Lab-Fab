import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Badge from "./Badge";

const ComponentReview = () => {
  const [componentIssues, setComponentIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [activeOption, setActiveOption] = useState("All Requests");

  useEffect(() => {
    const fetchComponentIssues = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/component/component-issues"
        );
        setComponentIssues(response.data.componentIssues);
      } catch (error) {
        console.error("Error fetching component issues:", error);
      }
    };

    fetchComponentIssues();
  }, []);

  useEffect(() => {
    // Filter component issues based on activeOption
    if (activeOption === "All Requests") {
      setFilteredIssues(componentIssues);
    } else {
      const filtered = componentIssues.filter(
        (issue) => issue.status === activeOption.toLowerCase()
      );
      setFilteredIssues(filtered);
    }
  }, [activeOption, componentIssues]);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const handleAccept = async (index) => {
    try {
      const updatedIssues = [...filteredIssues];
      updatedIssues[index].status = "approved";
      setFilteredIssues(updatedIssues);
      await axios.put(
        `http://localhost:3000/api/component/component-issues/${updatedIssues[index]._id}`,
        { status: "approved" }
      );
      // Display success toast
    } catch (error) {
      console.error("Error updating component issue status:", error);
    }
  };

  const handleReject = async (index) => {
    try {
      const updatedIssues = [...filteredIssues];
      updatedIssues[index].status = "rejected";
      setFilteredIssues(updatedIssues);
      await axios.put(
        `http://localhost:3000/api/component/component-issues/${updatedIssues[index]._id}`,
        { status: "rejected" }
      );
    } catch (error) {
      console.error("Error updating component issue status:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="relative max-w-md mx-auto mt-3">
        <div className="overflow-hidden bg-gray-200 pb-3 pr-3 pl-3 shadow-md">
          <div className="flex justify-between">
            {["All Requests", "Approved", "Rejected", "Pending"].map(
              (option) => (
                <button
                  key={option}
                  className={`w-1/4 py-2 text-center font-medium text-sm ${
                    activeOption === option
                      ? "text-white bg-blue-500"
                      : "text-gray-600 bg-transparent"
                  } focus:outline-none`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {filteredIssues.map((issue, index) => (
        <div
          key={index}
          className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl mr-2 ml-2"
        >
          <div className="flex flex-row justify-between">
            <div className="p-6">
              <div className="flex items-center">
                <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Venisha Parmar from Sem 6
                </h5>
                <Badge className="ml-3" status={issue.status} />
              </div>
              <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                Component Name to be Issue : <b>{issue.componentName}</b>
              </p>
            </div>
            <div className="p-6 pt-0 mt-2">
              {issue.status !== "approved" && (
                <>
                  <button
                    onClick={() => handleAccept(index)}
                    className="align-middle select-none  w-40 font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(index)}
                    className="align-middle select-none ml-2 w-40  font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-red-500 hover:bg-red-400"
                    type="button"
                  >
                    Reject
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ComponentReview;
