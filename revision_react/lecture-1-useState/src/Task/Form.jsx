import React, { useState } from 'react';

const Form = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(userInfo);
    setUserInfo({ 
      firstName: '', 
      lastName: '', 
      email: '',
      password: ''
    });
  };

  return (
    <div>
      <h1 className='p-2 bg-red-500 text-white text-center'>User Infromation</h1>
    <div className="max-w-md mx-auto p-4">
      <h1 className='p-2 bg-sky-400 text-white text-center'>Form</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
        <input type="text" name="firstName" value={userInfo.firstName} onChange={handleChange} className="mt-2 p-2 border border-gray-300 rounded w-full" /><br/>
        
        <label className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
        <input type="text" name="lastName" value={userInfo.lastName} onChange={handleChange} className="mt-2 p-2 border border-gray-300 rounded w-full"/><br/>
        
        <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input type="email" name="email" value={userInfo.email} onChange={handleChange} className="mt-2 p-2 border border-gray-300 rounded w-full"/><br/>
        
        <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
        <input type="password" name="password" value={userInfo.password} onChange={handleChange} className="mt-2 p-2 border border-gray-300 rounded w-full"/><br/>
        
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded w-full">Submit</button>
      </form>

      {submittedData && (
        <div className="mt-4 p-4 border border-gray-300 rounded bg-gray-50">
          <h2 className="font-bold text-lg">Submitted Data:</h2>
          <p><strong>First Name:</strong> {submittedData.firstName}</p>
          <p><strong>Last Name:</strong> {submittedData.lastName}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default Form;
