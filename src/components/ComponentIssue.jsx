import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const ComponentIssue = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialComponentName = queryParams.get("componentName") || "";
  const [componentName, setComponentName] = useState(initialComponentName);
  const [quantity, setQuantity] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [purpose, setPurpose] = useState("");
  const studentToken = localStorage.getItem("currentUser").toString();

  const handleSubmit = async () => {
    // Submit form data to API endpoint
    console.log("hyy", studentToken);
    const response = await fetch(
      "http://localhost:3000/api/component/component-issue",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          componentName,
          quantity,
          issueDate,
          returnDate,
          purpose,
          studentToken,
        }),
      }
    );
    // Handle response
    const data = await response.json();
    if (response.ok) {
      toast.success(" Request Added Successfully ", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
      setComponentName("");
      setQuantity("");
      setIssueDate("");
      setReturnDate("");
      setPurpose("");
    } else {
      alert(data.message);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto mt-10 mb-5">
        <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Component Issue Request</h1>
            <div className="mb-4">
              <label className="block mb-1">Component Name</label>
              <input
                type="text"
                value={componentName}
                onChange={(e) => setComponentName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Issue Date</label>
              <input
                type="date"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Return Date</label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Purpose</label>
              <input
                type="text"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full text-white py-2 rounded-lg transition duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentIssue;
