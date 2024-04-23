import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const RequestShow = () => {
  const [searchName, setSearchName] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [componentIssues, setComponentIssues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/component/component-issues",
          {
            studentToken: localStorage.getItem("currentUser"),
          }
        );
        if (response.data.success) {
          setComponentIssues(response.data.componentIssues);
        } else {
          console.error("Failed to fetch component issues");
        }
      } catch (error) {
        console.error("Error fetching component issues:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = componentIssues.filter(
    (item) =>
      item.componentName.toLowerCase().includes(searchName.toLowerCase()) &&
      item.status.toLowerCase().includes(searchStatus.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Component name
                  <input
                    type="text"
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search by name"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                  />
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Status
                  <input
                    type="text"
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search by status"
                    value={searchStatus}
                    onChange={(e) => setSearchStatus(e.target.value)}
                  />
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Issue date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Return date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((item) => (
                <tr key={item._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.componentName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div
                      className={`${
                        item.status === "pending"
                          ? "bg-red-400"
                          : "bg-green-400"
                      } text-white font-bold py-1 px-3 rounded-full`}
                    >
                      {item.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(item.issueDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(item.returnDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RequestShow;
