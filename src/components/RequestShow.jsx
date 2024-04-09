import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const RequestShow = () => {
  const [componentIssues, setComponentIssues] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComponentIssues = async () => {
      try {
        // Replace 'YOUR_STUDENT_TOKEN' with the actual student token value
        const studentToken = "";
        console.log(studentToken);
        const response = await axios.get(
          `http://localhost:3000/api/component/component-issues/RequestShow.jsx:14 eyJhbGciOiJSUzI1NiIsImtpZCI6IjkzYjQ5NTE2MmFmMGM4N2NjN2E1MTY4NjI5NDA5NzA0MGRhZjNiNDMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4NTg4OTY5MDM1MTUta3BtbzYyM2htaDN1aTZpazMycGRlZHI5M2l1cmdndWEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NTg4OTY5MDM1MTUta3BtbzYyM2htaDN1aTZpazMycGRlZHI5M2l1cmdndWEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE3NDgyOTcyMzM1NDQ1MTU5OTMiLCJoZCI6Im1hcndhZGl1bml2ZXJzaXR5LmFjLmluIiwiZW1haWwiOiJkZXYubWVodGExMTQ5NDFAbWFyd2FkaXVuaXZlcnNpdHkuYWMuaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzEyNjM1ODkwLCJuYW1lIjoiREVWIE1FSFRBIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0wwRHFSZUlCZmkxazJRM2pqdVJ1Z2ljclBIUUxJMkhwYm1JLUNDUEFiVXAtTEJ5QT1zOTYtYyIsImdpdmVuX25hbWUiOiJERVYiLCJmYW1pbHlfbmFtZSI6Ik1FSFRBIiwiaWF0IjoxNzEyNjM2MTkwLCJleHAiOjE3MTI2Mzk3OTAsImp0aSI6Ijg1MmM2Y2JjMDlhNTdjY2E5YzI2OGI1YmE0MjI5YzI0ZjgyNzhlOTQifQ.bkK52vQNOkL_G3ZWCEIbhk46R1NApjm0gh5voDo6z7J4tUciriqZ2DrFBGS2HS-6l-ZQUJ_LLRy5E8V3gq2oIGKQSkuHK9eol6mgRll8b8fXL0qDaVotA8kuIE4K95qQ9Vati61S_5tqJ7oyqnpDcrWON7S5985gPL8skbog5YiL0Y5HmnZ5qXPUcA0TB0TW_KMJYzq69aMSAN-EFbZsHCfSRWIT_u40DkZmihgDP2YcbAJeM4hMZoGNWRdnzwqUYdEtE-K4K1jG663wmq7AIQS4u9WZPvpPBDAw6xGcvLrjqhOkMp8Wt0_yg2ZVRij7sZRjPZygoJi3ffWqDszW0w`
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
