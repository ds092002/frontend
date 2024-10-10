import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Single count state

  const handleIncrement = () => {
    setCount(count + 1); // Increment count
  };

  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : 0); // Decrement count, ensuring it doesn't go below 0
  };

  return (
    <div>
      <h1 className='p-2 bg-indigo-600 text-white text-center'>Counter Example</h1>
      <div className="text-center p-4">
        <h2>Current Count: {count}</h2>
        <button 
          onClick={handleIncrement} 
          className="mt-2 p-2 mr-2 bg-green-500 text-white rounded">
          Increment
        </button>
        <button 
          onClick={handleDecrement} 
          className="mt-2 p-2 bg-red-500 text-white rounded">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
