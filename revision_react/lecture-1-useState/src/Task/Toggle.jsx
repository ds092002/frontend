import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div>
      <h1 className='p-2 bg-rose-600 text-white text-center'>Toggle Example</h1>
      <div className='p-4 text-center'>
      <button
        onClick={handleToggle}
        className={`mt-4 p-2 rounded-full ${isToggled ? 'bg-green-500' : 'bg-red-500'} text-white`}
      >
        {isToggled ? 'On' : 'Off'}
      </button>
      <p className="mt-2">
        The toggle is <p>{isToggled ? 'On' : 'Off'}</p>.
      </p>
      </div>
    </div>
  );
}

export default ToggleButton;
