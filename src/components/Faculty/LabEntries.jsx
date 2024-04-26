const LabEntries = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="overflow-x-auto">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Student Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Semester 
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Purpous
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Entry Time
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
              Leave Time
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                Venisha Parmar
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Sem 6
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Project Work
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
               2 PM
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                4 PM
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default LabEntries
