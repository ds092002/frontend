import React, { useState } from 'react';
import LogicalOp from './LogicalOp';
import Form from './Form';
import Counter from './Counter';
import Toggle from './Toggle';
import ArrayState from './ArrayState';

function IfElseStatment() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadData = () => {
    setIsLoading(false); 
  };

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else {
    content = <p>Data has been loaded!</p>;
  }
  
  return (
    <div className=" p-4">
      <h1 className='p-2 bg-sky-400 text-white text-center'>If-Else Conditional Rendering</h1>
      <div className="mt-4 text-center">
        {content}
        <button 
          onClick={handleLoadData} 
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Load Data
        </button>
      </div>

      <div className="mt-8">
        <LogicalOp />
        <Form />
        <Counter />
        <Toggle />
        <ArrayState/>
      </div>
    </div>
  );
}

export default IfElseStatment;
