import React, { useState } from "react";
import NavBar from "./NavBar";
import toast from "react-hot-toast";

const AddComponent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startingTime, setStartingTime] = useState(null);
  const [endingTime, setEndingTime] = useState(null);

  const handleSubmit = async () => {
    try {
      setName("");
      setDescription("");
      setLocation("");
      setStartingTime("");
      setEndingTime("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto mt-10 mb-5 flex justify-center">
        <div className="max-w-md w-full px-8 py-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-center mb-4">Add Component</h1>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
              rows={4}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Starting Time
              </label>
              <input
                type="time"
                value={startingTime}
                onChange={(e) => setStartingTime(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Ending Time
              </label>
              <input
                type="time"
                value={endingTime}
                onChange={(e) => setEndingTime(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Component
          </button>
        </div>
      </div>
    </>
  );
};

export default AddComponent;
