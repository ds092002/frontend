import React from 'react';
import UserList from './UserList';
import AddUser from './AddUser';

const AdminPanel = ({ user }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>

      <AddUser />

      <h3 className="text-xl font-semibold mb-4">Manage Users</h3>
      {/* Admin can see all users */}
      <UserList showAllUsers={true} />
    </div>
  );
};

export default AdminPanel;
