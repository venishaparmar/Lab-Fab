import NavBar from "./NavBar";
import { useState } from "react";

const data = [
  {
    _id: {
      $oid: "6614f47e123432e7b9dac1d0",
    },
    studentToken:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjkzYjQ5NTE2MmFmMGM4N2NjN2E1MTY4NjI5NDA5NzA0MGRhZjNiNDMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4NTg4OTY5MDM1MTUta3BtbzYyM2htaDN1aTZpazMycGRlZHI5M2l1cmdndWEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NTg4OTY5MDM1MTUta3BtbzYyM2htaDN1aTZpazMycGRlZHI5M2l1cmdndWEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE3NDgyOTcyMzM1NDQ1MTU5OTMiLCJoZCI6Im1hcndhZGl1bml2ZXJzaXR5LmFjLmluIiwiZW1haWwiOiJkZXYubWVodGExMTQ5NDFAbWFyd2FkaXVuaXZlcnNpdHkuYWMuaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzEyNjQ4OTgwLCJuYW1lIjoiREVWIE1FSFRBIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0wwRHFSZUlCZmkxazJRM2pqdVJ1Z2ljclBIUUxJMkhwYm1JLUNDUEFiVXAtTEJ5QT1zOTYtYyIsImdpdmVuX25hbWUiOiJERVYiLCJmYW1pbHlfbmFtZSI6Ik1FSFRBIiwiaWF0IjoxNzEyNjQ5MjgwLCJleHAiOjE3MTI2NTI4ODAsImp0aSI6ImE1NzUzYzdjMWRiYThlMDJhZDk2NDQzMmJmYmUzY2E0N2NjMTYzMGYifQ.jfPcbhETYkmvALV6-mHqfJ0YRyNzMWy-EkknYkzoAI8Ezst5gWi8eHQUBMOSD3-Ls5nUHMgkBdwwQpvqZl1f9Z5N6WARhHTSltY2PTPq1Wfi_uEtttlSXneZDC-Sok34_9L5zw1H0Kf0VF-t08pNepfH1LPYFzNgxD6RO37EM8UlwvIfROTF5uLVr9PTvufz6bU6UeUB36mcwpmz4e991T7qHS2h9WC-kZL7Vk03qzXNGMAdJGpQXcsCQOSFRcs8IWfwlnDainVZQ5_8rrGnj3Q4VDZdaIniK-r_hVB16I4LfO2mGQ0WuyG3ALtGJiL_OxjGYDBp9Dk_n61IfFhmHA",
    componentName: "LEDs",
    quantity: 10,
    issueDate: {
      $date: "2024-04-08T00:00:00.000Z",
    },
    returnDate: {
      $date: "2024-04-09T00:00:00.000Z",
    },
    purpose: "To perform experiment",
    status: "pending",
    __v: 0,
  },
  {
    _id: {
      $oid: "661817e54e369efbd6c09d8c",
    },
    studentToken:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjkzYjQ5NTE2MmFmMGM4N2NjN2E1MTY4NjI5NDA5NzA0MGRhZjNiNDMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4NTg4OTY5MDM1MTUta3BtbzYyM2htaDN1aTZpazMycGRlZHI5M2l1cmdndWEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NTg4OTY5MDM1MTUta3BtbzYyM2htaDN1aTZpazMycGRlZHI5M2l1cmdndWEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE3NDgyOTcyMzM1NDQ1MTU5OTMiLCJoZCI6Im1hcndhZGl1bml2ZXJzaXR5LmFjLmluIiwiZW1haWwiOiJkZXYubWVodGExMTQ5NDFAbWFyd2FkaXVuaXZlcnNpdHkuYWMuaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzEyODU0NTA3LCJuYW1lIjoiREVWIE1FSFRBIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0wwRHFSZUlCZmkxazJRM2pqdVJ1Z2ljclBIUUxJMkhwYm1JLUNDUEFiVXAtTEJ5QT1zOTYtYyIsImdpdmVuX25hbWUiOiJERVYiLCJmYW1pbHlfbmFtZSI6Ik1FSFRBIiwiaWF0IjoxNzEyODU0ODA3LCJleHAiOjE3MTI4NTg0MDcsImp0aSI6Ijc4YjM1Y2Q3NjFjYWZhZjRmMTA0ZjJkMzE1NjFlM2IwODRmN2QzODIifQ.G3_crbyKCZAO6IzfZI4kxmNmcpccd2UPmduZpLc9tVxXPAMzcIpkYjQPVD7wP9oWyvTXWrmX2obfJdpz7TKpRejs_rKwDXqwJrhntqlL5vKdIKVn3XK-HvVBEIck_8Fxe5BLZsZo0L9d_V2BvTGD3gNR2KfYQ_kTK8gHz_2wwWXf2MeDt1EzG2i-0EeJANXJguq9czjCUVnieeatwM3qb2kjkhNnqLg7NcAOgsUoZql5sAjZwf09Cx4m4HzgJguG6xtTrCvjcO3XcGvJqxhOjWgYOwhPHvrN8SflZIo96Za-5bKvyCUlATFSN_dDKb49VlWuaIckf_URv-N2EWiMXw",
    componentName: "BreadBoard",
    quantity: 10,
    issueDate: {
      $date: "2024-04-11T00:00:00.000Z",
    },
    returnDate: {
      $date: "2024-04-12T00:00:00.000Z",
    },
    purpose: "To Perform Experiment",
    status: "pending",
    __v: 0,
  },
  {
    _id: {
      $oid: "661817e54e369efbd6c09d8c",
    },
    studentToken:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjkzYjQ5NTE2MmFmMGM4N2NjN2E1MTY4NjI5NDA5NzA0MGRhZjNiNDMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4NTg4OTY5MDM1MTUta3BtbzYyM2htaDN1aTZpazMycGRlZHI5M2l1cmdndWEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NTg4OTY5MDM1MTUta3BtbzYyM2htaDN1aTZpazMycGRlZHI5M2l1cmdndWEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE3NDgyOTcyMzM1NDQ1MTU5OTMiLCJoZCI6Im1hcndhZGl1bml2ZXJzaXR5LmFjLmluIiwiZW1haWwiOiJkZXYubWVodGExMTQ5NDFAbWFyd2FkaXVuaXZlcnNpdHkuYWMuaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzEyODU0NTA3LCJuYW1lIjoiREVWIE1FSFRBIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0wwRHFSZUlCZmkxazJRM2pqdVJ1Z2ljclBIUUxJMkhwYm1JLUNDUEFiVXAtTEJ5QT1zOTYtYyIsImdpdmVuX25hbWUiOiJERVYiLCJmYW1pbHlfbmFtZSI6Ik1FSFRBIiwiaWF0IjoxNzEyODU0ODA3LCJleHAiOjE3MTI4NTg0MDcsImp0aSI6Ijc4YjM1Y2Q3NjFjYWZhZjRmMTA0ZjJkMzE1NjFlM2IwODRmN2QzODIifQ.G3_crbyKCZAO6IzfZI4kxmNmcpccd2UPmduZpLc9tVxXPAMzcIpkYjQPVD7wP9oWyvTXWrmX2obfJdpz7TKpRejs_rKwDXqwJrhntqlL5vKdIKVn3XK-HvVBEIck_8Fxe5BLZsZo0L9d_V2BvTGD3gNR2KfYQ_kTK8gHz_2wwWXf2MeDt1EzG2i-0EeJANXJguq9czjCUVnieeatwM3qb2kjkhNnqLg7NcAOgsUoZql5sAjZwf09Cx4m4HzgJguG6xtTrCvjcO3XcGvJqxhOjWgYOwhPHvrN8SflZIo96Za-5bKvyCUlATFSN_dDKb49VlWuaIckf_URv-N2EWiMXw",
    componentName: "BreadBoard",
    quantity: 10,
    issueDate: {
      $date: "2024-04-11T00:00:00.000Z",
    },
    returnDate: {
      $date: "2024-04-12T00:00:00.000Z",
    },
    purpose: "To Perform Experiment",
    status: "accepted",
    __v: 0,
  },
];

const RequestShow = () => {
    const [searchName, setSearchName] = useState("");
    const [searchStatus, setSearchStatus] = useState("");
  
    const filteredData = data.filter(
      (item) =>
        item.componentName.toLowerCase().includes(searchName.toLowerCase()) &&
        item.status.toLowerCase().includes(searchStatus.toLowerCase())
    );
  
    return (
      <>
        <NavBar />
        <div className="items-center justify-center m-3">
          <div className="mb-2 ml-2 overflow-x-auto">
            <table className="w-full min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="text-sm">Component name</div>
                    <input
                      type="text"
                      className="w-30 border border-gray-300 rounded-md h-8 p-1"
                      placeholder="Search by name"
                      value={searchName}
                      onChange={(e) => setSearchName(e.target.value)}
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="text-sm">Status</div>
                    <input
                      type="text"
                      className="w-24 border border-gray-300 rounded-md h-8 p-1"
                      placeholder="Search by status"
                      value={searchStatus}
                      onChange={(e) => setSearchStatus(e.target.value)}
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Issue date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Return date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item) => (
                  <tr key={item._id.$oid}>
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
                        style={{ display: "inline-block" }}
                      >
                        {item.status}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(item.issueDate.$date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(item.returnDate.$date).toLocaleDateString()}
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
  

// import { useState, useEffect } from "react";
// import axios from "axios";
// import NavBar from "./NavBar";

// const RequestShow = () => {
//   const [componentIssues, setComponentIssues] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchComponentIssues = async () => {
//       try {
//         // Replace 'YOUR_STUDENT_TOKEN' with the actual student token value
//         const studentToken = localStorage.getItem("jwt-token");
//         console.log(studentToken);
//         const response = await axios.get(
//           `http://localhost:3000/api/component/component-issues/e1bscdhvbcgft2`
//         );
//         setComponentIssues(response.data.componentIssues);
//         console.log(response.data.componentIssues);
//       } catch (error) {
//         setError(error.response.data.message);
//       }
//     };

//     fetchComponentIssues();
//   }, []);
//   return (
//     <>
//       <NavBar />
//       <div className="flex flex-col items-center justify-center mt-3">
//         <main className="min-h-screen">
//           <div className="grid w-[40rem] grid-cols-3 gap-2 rounded-xl bg-gray-200 p-2">
//             <div className="mb-2 ml-2">
//               <input
//                 type="radio"
//                 name="option"
//                 id={1}
//                 defaultValue={1}
//                 className="peer hidden"
//                 defaultChecked
//               />
//               <label
//                 htmlFor={1}
//                 className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
//               >
//                 All Requests
//               </label>
//             </div>
//             <div>
//               <input
//                 type="radio"
//                 name="option"
//                 id={2}
//                 defaultValue={2}
//                 className="peer hidden"
//               />
//               <label
//                 htmlFor={2}
//                 className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
//               >
//                 Pending Requests
//               </label>
//             </div>
//             <div className="mr-2">
//               <input
//                 type="radio"
//                 name="option"
//                 id={3}
//                 defaultValue={3}
//                 className="peer hidden"
//               />
//               <label
//                 htmlFor={3}
//                 className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
//               >
//                 Accepted Request
//               </label>
//             </div>
//           </div>
//         </main>

//       </div>
//       <div>
//         {error && <p>Error: {error}</p>}
//         <h2>Component Issue Requests</h2>
//         <ul>
//           {componentIssues.map((issue) => (
//             <li key={issue._id}>
//               <p>Component Name: {issue.componentName}</p>
//               <p>Quantity: {issue.quantity}</p>
//               <p>Issue Date: {issue.issueDate}</p>
//               <p>Return Date: {issue.returnDate}</p>
//               <p>Purpose: {issue.purpose}</p>
//               <p>Status: {issue.status}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default RequestShow;
