import React, { useState } from 'react';

const Form = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  console.log('Form Data', userInfo)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInfo({ 
        firstName: '', 
        lastName: '', 
        email: '',
        password: ''
    });
  };

  return (
    <div>
      <h1 className='p-2 bg-sky-400 text-white text-center'>User Information Form</h1>
      <form onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input type="text" name="firstName" value={userInfo.firstName} onChange={handleChange} className="mt-2 p-1 border rounded" /><br/>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={userInfo.lastName} onChange={handleChange} className="mt-2 p-1 border rounded"/><br/>
          <label>Email:</label>
          <input type="email" name="email" value={userInfo.email} onChange={handleChange} className="mt-2 p-1 border rounded"/><br/>
          <label>Password:</label>
          <input type="password" name="password" value={userInfo.password} onChange={handleChange} className="mt-2 p-1 border rounded"/><br/>
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
    </div>
  );
}

export default Form;
