import React, { useState } from 'react';

const SwitchCase = () => {
  const [studentName, setStudentName] = useState('Dhaval'); 
  const [inputValue, setInputValue] = useState('');

  let fullName; 
  switch (studentName) {
    case 'Dhaval':
      fullName = <p>Dhaval Solanki</p>;
      break;
    case 'VijayS':
      fullName = <p>Vijay Solanki</p>;
      break;
    case 'VijayD':
      fullName = <p>Vijay Dankhra</p>;
      break;
    case 'Darshan':
      fullName = <p>Darshan Chauhan</p>;
      break;
    case 'Krish':
      fullName = <p>Krish Ranghani</p>;
      break;
    case 'Bhautik':
      fullName = <p>Bhautik Dudhat</p>;
      break;
    case 'Mahendr':
      fullName = <p>Mahendr Purohit</p>;
      break;
    case 'Vrishabh':
      fullName = <p>Vrishabh Jogani</p>;
      break;
    case 'Dipesh':
      fullName = <p>Dipesh Parmar</p>;
      break;
    case 'Nayan':
      fullName = <p>Nayan Katariya</p>;
      break;
    default:
      fullName = <p>Aavo koi student nathi</p>;
      break;
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSwitchStudent = () => {
    setStudentName(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <h1 className='p-2 bg-green-500 text-white text-center'>Switch Case</h1>
      <div className='p-4 text-center'>
      <h3>Current Student: {studentName}</h3>
      <h3>Full Name: {fullName}</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter student name"
        className='mt-2 p-2 border border-gray-300 rounded mr-1'
      />
      <button onClick={handleSwitchStudent} className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Switch Student</button>
      </div>
    </div>
  );
};

export default SwitchCase;
