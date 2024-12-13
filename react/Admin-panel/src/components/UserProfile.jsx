import React, { useState } from 'react';

const UserProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    // In a real app, you would save the changes to a backend.
    alert(`Profile updated: ${name} | ${email}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
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
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400"
      >
        Save Changes
      </button>
    </div>
  );
};

export default UserProfile;
