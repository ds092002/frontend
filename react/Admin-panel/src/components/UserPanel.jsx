import React, { useState } from 'react';

const UserPanel = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSaveProfile = () => {
    // Here, you'd typically update the user's profile via an API.
    alert(`Profile saved: ${name} (${email})`);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">User Panel</h2>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Your Profile</h3>
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
          onClick={handleSaveProfile}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default UserPanel;
