import React, { useState, useEffect, useMemo } from 'react';
import { GrFormView } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const TableData = () => {
  const [userData, setUserData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [showTooltip, setShowTooltip] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/data');
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pages = Math.ceil(userData.length / rowsPerPage);

  const filteredItems = useMemo(() => {
    return userData.filter(item =>
      item.firstname.toLowerCase().includes(filterValue.toLowerCase()) ||
      item.lastname.toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [filterValue, userData]);

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return filteredItems.slice(start, start + rowsPerPage);
  }, [filteredItems, page, rowsPerPage]);

  const handleMouseEnter = (id, action) => {
    setShowTooltip(prev => ({ ...prev, [id]: action }));
  };

  const handleMouseLeave = (id) => {
    setShowTooltip(prev => ({ ...prev, [id]: null }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6 flex items-center justify-between bg-white p-4 shadow rounded-lg">
        <input
          type="text"
          placeholder="Search by name..."
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={rowsPerPage}
          onChange={(e) => {
            setRowsPerPage(Number(e.target.value));
            setPage(1);
          }}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>

      <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Id</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">First Name</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Last Name</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Age</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Gender</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Location</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {paginatedItems.map(item => (
            <tr key={item.id}>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <img src={item.image} alt="Avatar" className="w-12 h-12 rounded-full border-2 border-gray-200" />
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.firstname}</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.lastname}</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.age}</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.gender}</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.location}</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium flex justify-center items-center">
                <div
                  className="relative inline-block"
                  onMouseEnter={() => handleMouseEnter(item.id, 'view')}
                  onMouseLeave={() => handleMouseLeave(item.id)}
                >
                  <button className="text-blue-500 hover:text-blue-700 text-2xl">
                    <GrFormView />
                  </button>
                  {showTooltip[item.id] === 'view' && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded p-2">
                      View
                    </div>
                  )}
                </div>

                <div
                  className="relative inline-block"
                  onMouseEnter={() => handleMouseEnter(item.id, 'edit')}
                  onMouseLeave={() => handleMouseLeave(item.id)}
                >
                  <button className="text-yellow-500 hover:text-yellow-700 text-xl mx-2">
                    <FaRegEdit />
                  </button>
                  {showTooltip[item.id] === 'edit' && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded p-2">
                      Edit
                    </div>
                  )}
                </div>

                <div
                  className="relative inline-block"
                  onMouseEnter={() => handleMouseEnter(item.id, 'delete')}
                  onMouseLeave={() => handleMouseLeave(item.id)}
                >
                  <button className="text-red-500 hover:text-red-700 text-xl">
                    <MdDeleteOutline />
                  </button>
                  {showTooltip[item.id] === 'delete' && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded p-2">
                      Delete
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-gray-600">
          Page {page} of {pages}
        </span>
        <div className="flex space-x-2">
          <button
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setPage(prev => Math.min(prev + 1, pages))}
            disabled={page === pages}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableData;
