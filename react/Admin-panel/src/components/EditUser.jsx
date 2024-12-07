import React, { useState, useEffect } from 'react';

const EditUser = ({ user, onUpdateUser, onCancelEdit }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ id: user.id, name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Edit User</h2>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400"
      >
        Update User
      </button>
      <button 
        type="button" 
        onClick={onCancelEdit}
        className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUser;
