import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buy_coco, buy_thikshak } from '../redux/Action';

// Component that interacts with the Redux store and handles buying actions
const Redux_Container = () => {
  // Local state to track if an item is out of stock and which item it is
  const [isOutOfStock, setIsOutOfStock] = useState(false);
  const [outOfStockItem, setOutOfStockItem] = useState('');

  // Getting the number of Coco and ThikShak from the Redux store
  const CocoData = useSelector(state => state.Cocos.NumOfCoco);
  const ThikShakData = useSelector(state => state.ThikShak.NumOfThikShak);

  // Setting up dispatch to send actions to the Redux store
  const dispatch = useDispatch();

  // Handle buying Coco, checking if it is in stock
  const handleBuyCoco = () => {
    if (CocoData > 0) {
      dispatch(buy_coco());
    } else {
      setOutOfStockItem('Coco'); // Set the out-of-stock item
      setIsOutOfStock(true); // Trigger the modal
      console.log('Coco is out of stock');
      // Close modal after 2 seconds automatically
      setTimeout(() => {
        setIsOutOfStock(false);
      }, 2000);
    }
  };

  // Handle buying ThikShak, checking if it is in stock
  const handleBuyThikshak = () => {
    if (ThikShakData > 0) {
      dispatch(buy_thikshak());
    } else {
      setOutOfStockItem('ThikShak');
      setIsOutOfStock(true);
      setTimeout(() => {
        setIsOutOfStock(false);
      }, 2000);
    }
  };

  // Manually close the out-of-stock modal
  const closeModal = () => {
    setIsOutOfStock(false);
  };

  // Debugging log for tracking state changes
  console.log('CocoData:', CocoData);
  console.log('ThikShakData:', ThikShakData);
  console.log('isOutOfStock:', isOutOfStock);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">This is React Redux</h1>

      {/* Displaying the Coco count */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Coco Count</h2>
        <div className={`text-4xl font-bold mb-4 ${CocoData === 0 ? 'text-red-500' : 'text-green-500'}`}>
          {CocoData}
        </div>
        <button 
          className={`px-4 py-2 rounded-lg shadow-md transition-all ${
            CocoData === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-500 text-white hover:bg-indigo-600'
          }`}
          onClick={handleBuyCoco}
          disabled={CocoData === 0} // Disable the button when Coco is out of stock
        >
          Buy Coco
        </button>
      </div>

      {/* Displaying the ThikShak count */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">ThikShak Count</h2>
        <div className={`text-4xl font-bold mb-4 ${ThikShakData === 0 ? 'text-red-500' : 'text-green-500'}`}>
          {ThikShakData}
        </div>
        <button 
          className={`px-4 py-2 rounded-lg shadow-md transition-all ${
            ThikShakData === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-500 text-white hover:bg-indigo-600'
          }`}
          onClick={handleBuyThikshak}
          disabled={ThikShakData === 0} // Disable the button when ThikShak is out of stock
        >
          Buy ThikShak
        </button>
      </div>

      {/* Modal for Out of Stock */}
      {isOutOfStock && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Out of Stock!</h2>
            <p className="mb-4">Sorry, {outOfStockItem} is out of stock!</p>
            <button 
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Redux_Container;
