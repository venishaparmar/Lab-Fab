import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
        

const RequestShow = () => {
  const [componentIssues, setComponentIssues] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComponentIssues = async () => {
      try {
        // Replace 'YOUR_STUDENT_TOKEN' with the actual student token value
        const studentToken = localStorage.getItem("jwt-token");
        console.log(studentToken);
        const response = await axios.get(
          `http://localhost:3000/api/component/component-issues/e1bscdhvbcgft2`
        );
        setComponentIssues(response.data.componentIssues);
        console.log(response.data.componentIssues);
      } catch (error) {
        setError(error.response.data.message);
      }
    };

    fetchComponentIssues();
  }, []);
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center mt-3">
        <main className="min-h-screen">
          <div className="grid w-[40rem] grid-cols-3 gap-2 rounded-xl bg-gray-200 p-2">
            <div className="mb-2 ml-2">
              <input
                type="radio"
                name="option"
                id={1}
                defaultValue={1}
                className="peer hidden"
                defaultChecked
              />
              <label
                htmlFor={1}
                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
              >
                All Requests
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="option"
                id={2}
                defaultValue={2}
                className="peer hidden"
              />
              <label
                htmlFor={2}
                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
              >
                Pending Requests
              </label>
            </div>
            <div className="mr-2">
              <input
                type="radio"
                name="option"
                id={3}
                defaultValue={3}
                className="peer hidden"
              />
              <label
                htmlFor={3}
                className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
              >
                Accepted Request
              </label>
            </div>
          </div>
        </main>

        
      </div>



      <div>
        {error && <p>Error: {error}</p>}
        <h2>Component Issue Requests</h2>
        <ul>
          {componentIssues.map((issue) => (
            <li key={issue._id}>
              <p>Component Name: {issue.componentName}</p>
              <p>Quantity: {issue.quantity}</p>
              <p>Issue Date: {issue.issueDate}</p>
              <p>Return Date: {issue.returnDate}</p>
              <p>Purpose: {issue.purpose}</p>
              <p>Status: {issue.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RequestShow;
