import React, { useState } from 'react';
import LogicalOp from './LogicalOp';

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
    <div>
      <h1 className='p-2 bg-sky-400 text-white text-center'>If-Else Conditional Rendering</h1>
      {content}
      <button onClick={handleLoadData} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Load Data
      </button>
      <LogicalOp/>
    </div>
  );
}

export default IfElseStatment;
