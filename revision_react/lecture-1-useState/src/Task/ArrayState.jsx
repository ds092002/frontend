import React, { useState } from 'react';

const ArrayState = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems((prevItems) => [...prevItems, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 className='p-2 bg-lime-400 text-white text-center'>Array State Example</h1>
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-lg font-semibold">To-Do List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded"
          placeholder="Add an item"
        />
        <button
          onClick={handleAddItem}
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Add Item
        </button>

        <ul className="mt-4">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center p-2 border-b">
              <span>{item}</span>
              <button
                onClick={() => handleDeleteItem(index)}
                className="text-red-500 hover:text-red-700"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArrayState;
