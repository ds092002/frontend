import React, { useState, useEffect } from 'react';

const Form = ({ onSubmit, initialData, onCancel }) => {
  const [formData, setFormData] = useState({
    id: '',
    image: '',
    firstname: '',
    lastname: '',
    age: '',
    gender: '',
    location: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">User Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Doe"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="30"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <select
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-5">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="New York"
            required
          />
        </div>
        <div className="flex justify-end space-x-3">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
