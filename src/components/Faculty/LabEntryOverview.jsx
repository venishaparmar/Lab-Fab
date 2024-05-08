import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const LabEntryOverview = () => {
  const [selectedLab, setSelectedLab] = useState('');
  const [showLabFilter, setShowLabFilter] = useState(false);

  const handleLabChange = (event) => {
    setSelectedLab(event.target.value);
  };

  const toggleLabFilter = () => {
    setShowLabFilter(!showLabFilter);
  };

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
                Purpose
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Entry Time
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Leave Time
              </th>
              <th className="px-6 py-3 text-left flex text-sm font-medium text-gray-500 uppercase tracking-wider">
                Lab Number
                <div className="filter-icon" onClick={toggleLabFilter}>
                  <FilterAltIcon style={{ marginLeft: '0.5rem', cursor: 'pointer' }} />
                </div>
                {showLabFilter && (
                 <Select
                 value={selectedLab}
                 onChange={handleLabChange}
                 displayEmpty
                 style={{ marginLeft: '0.5rem', fontSize: '0.875rem', padding: '4px 8px' }}
                 MenuProps={{
                   PaperProps: {
                     style: {
                       maxHeight: 200, // Adjust the maxHeight as needed
                       width: 200, // Adjust the width as needed
                     },
                   },
                 }}
               >
                 <MenuItem value="">All Labs</MenuItem>
                 <MenuItem value="MA115">MA115</MenuItem>
                 <MenuItem value="MA113">MA113</MenuItem>
                 {/* Add more lab locations here */}
               </Select>
                )}
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
              <td className="px-6 py-4 whitespace-nowrap">
                MA115
              </td>
            </tr>
            {/* Add more table rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LabEntryOverview;
