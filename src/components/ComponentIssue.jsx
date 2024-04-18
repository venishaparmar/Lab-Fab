import { useState } from "react";
import "../styles/componentissue.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import NavBar from "./NavBar";
const ComponentIssue = () => {
  const [componentName, setComponentName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [issueDate, setIssueDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [purpose, setPurpose] = useState("");

  const handleSubmit = async () => {
    try {
      const formattedIssueDate = issueDate
        ? issueDate.toISOString().split("T")[0]
        : null;
      const formattedReturnDate = returnDate
        ? returnDate.toISOString().split("T")[0]
        : null;

      const response = await axios.post(
        "http://localhost:3000/api/component/component-issue",
        {
          componentName,
          quantity,
          issueDate: formattedIssueDate,
          returnDate: formattedReturnDate,
          purpose,
          status: "pending",
          studentToken:localStorage.getItem("jwt-token"),
        }
      );
      console.log(response.data);
      // Reset form after successful submission
      setComponentName(() => "");
      setQuantity(() => 0);
      setIssueDate(() => null);
      setReturnDate(() => null);
      setPurpose(() => "");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                  i
                </div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Request For Component</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label htmlFor="comp-name" className="leading-loose">
                      Component Name
                    </label>
                    <input
                      id="comp-name"
                      onChange={(e) => setComponentName(e.target.value)}
                      type="text"
                      name="componentName"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Enter Component Name.."
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      onChange={(e) => setQuantity(e.target.value)}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Enter Quantity"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <label className="leading-loose">Issue Date</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <DatePicker
                          selected={issueDate}
                          onChange={(date) => setIssueDate(date)}
                          dateFormat="dd/MM/yyyy"
                          minDate={new Date()}
                          isClearable
                          name="issueDate"
                        />
                        <div className="absolute left-3 top-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Return Date</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <DatePicker
                          selected={returnDate}
                          onChange={(date) => setReturnDate(date)}
                          dateFormat="dd/MM/yyyy"
                          minDate={new Date()}
                          isClearable
                          name="returnDate"
                        />
                        <div className="absolute left-3 top-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Purpose</label>
                    <input
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Enter Purpose"
                      onChange={(e) => setPurpose(e.target.value)}
                      name="purpose"
                    />
                  </div>
                </div>
                <div className="pt-4 flex items-center space-x-4">
                  <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>{" "}
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentIssue;
