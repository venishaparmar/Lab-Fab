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
    status: "accepted",
    __v: 0,
  }
];

const RequestShow = () => {
  const [searchName, setSearchName] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  
  const filteredData = data.filter(
    (item) =>
      item.componentName.toLowerCase().includes(searchName.toLowerCase()) &&
      (statusFilter === "All" || item.status.toLowerCase() === statusFilter.toLowerCase())
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
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider items-center"
                  >
                    <div className="text-base mr-2 ml-[-25px]">Component name</div>
                    <input
                      type="text"
                      className="w-30 border border-gray-300 rounded-md h-8 p-1 ml-[-25px]"
                      placeholder="Search by name"
                      value={searchName}
                      onChange={(e) => setSearchName(e.target.value)}
                    />
                  </th>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="text-base mb-8">Quantity</div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="text-base mb-8 flex items-center">
                        Status
                        <select
                          className="text-sm ml-2 ml-1 border border-gray-300 rounded-md h-8 p-1"
                          value={statusFilter}
                          onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="text-base mb-8">Issue Date</div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="text-base mb-8">Return date</div>
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
                      className={`${item.status === "pending"
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
