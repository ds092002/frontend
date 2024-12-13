import React, { useState } from 'react';

const SignUp = ({ onSignUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Simulating user registration (saving data to localStorage)
    const newUser = { name, email, password, role: 'user' }; // Default role as 'user'
    localStorage.setItem('user', JSON.stringify(newUser)); // Save to localStorage
    onSignUp(newUser); // Notify App component that user has signed up
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
      <form onSubmit={handleSignUp}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="w-full px-4 py-2 border rounded-lg"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 w-full"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
