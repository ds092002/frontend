import React, { useState } from 'react';

const CRUD = () => {
  const initialData = [
    { id: 1, name: "John", age: 22 },
    { id: 2, name: "Johny", age: 23 },
  ];

  const [users, setUsers] = useState(initialData);
  const [form, setForm] = useState({ id: null, name: "", age: "" });
  const [edit, setEdit] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Fixed typo
    if (edit) {
      setUsers(users.map((user) => (user.id === form.id ? form : user)));
      setEdit(false);  // Fixed typo
    } else {
      setUsers([...users, { ...form, id: users.length + 1 }]);  // Fixed reference to `users`
    }
    setForm({ id: null, name: "", age: "" });
  };

  const handleEdit = (user) => {
    setForm(user);
    setEdit(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>{edit ? "Edit" : "Add"}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={form.name} onChange={handleChange} required />
        <input type="number" name='age' value={form.age} onChange={handleChange} required />
        <button type="submit">{edit ? "Update" : "Add"}</button>
      </form>
      <h1>List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age})
            <div>
              <button onClick={() => handleEdit(user)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRUD;
