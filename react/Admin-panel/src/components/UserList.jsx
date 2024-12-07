import React from 'react';

const UserList = ({ users, currentUser }) => {
  const isAdmin = currentUser.role === 'admin';

  const handleDelete = (userId) => {
    // Handle user deletion logic here (e.g., remove from the state or database)
    console.log('Delete user with ID:', userId);
  };

  const handleEdit = (userId) => {
    // Handle user editing logic here (e.g., open a modal for editing)
    console.log('Edit user with ID:', userId);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">User List</h3>
      <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            {isAdmin && <th className="px-4 py-2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
              {isAdmin && (
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-400"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400 ml-2"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
