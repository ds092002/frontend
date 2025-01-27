import { useState, useEffect } from "react";
import axios from "axios";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    gender: "Male",
    mobileNo: ""
  });
  
  const [editingUser, setEditingUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/users/user/getAll");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        await axios.put(`http://localhost:7000/api/users/user/update?userId=${editingUser._id}`, formData);
      } else {
        const response = await axios.post("http://localhost:7000/api/users/user/register", formData);
        console.log("User added:", response.data);
      }
      fetchUsers();
      setFormData({
        userName: "",
        email: "",
        gender: "Male",
        mobileNo: ""
      });
      setEditingUser(null);
      setError("");
    } catch (error) {
      console.error("Error saving user:", error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message : "Something went wrong");
    }
  };

  // Handle delete user
  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await axios.delete(`http://localhost:7000/api/users/user/delete?userId=${userId}`);
      fetchUsers();
    }
  };

  // Handle edit user
  const handleEdit = (user) => {
    setFormData(user);
    setEditingUser(user);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="userName"
          placeholder="User Name"
          value={formData.userName}
          onChange={handleChange}
          required
          className="border p-2 mr-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 mr-2"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border p-2 mr-2"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="mobileNo"
          placeholder="Mobile No"
          value={formData.mobileNo}
          onChange={handleChange}
          required
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          {editingUser ? "Update" : "Add"} User
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <table className="border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">User Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Mobile No</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border p-2">{user.userName}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.gender}</td>
              <td className="border p-2">{user.mobileNo}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-yellow-500 text-white p-1 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="bg-red-500 text-white p-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
