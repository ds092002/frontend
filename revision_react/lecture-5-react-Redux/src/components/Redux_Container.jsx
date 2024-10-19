import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buy_coco, buy_thikshak } from '../redux/Action';

const Redux_Container = () => {
  const [isOutOfStock, setIsOutOfStock] = useState(false);
  const [outOfStockItem, setOutOfStockItem] = useState('');

  const CocoData = useSelector(state => state.Cocos.NumOfCoco);
  const ThikShakData = useSelector(state => state.ThikShak.NumOfThikShak);

  const dispatch = useDispatch();

  // Handle stock condition for Coco
  const handleBuyCoco = () => {
    if (CocoData > 0) {
      dispatch(buy_coco());
    } else {
      setOutOfStockItem('Coco');
      setIsOutOfStock(true);
      console.log('Coco is out of stock');
      // Automatically close the modal after 2 seconds
      setTimeout(() => {
        setIsOutOfStock(false);
      }, 2000);
    }
  };

  // Handle stock condition for ThikShak
  const handleBuyThikshak = () => {
    if (ThikShakData > 0) {
      dispatch(buy_thikshak());
    } else {
      setOutOfStockItem('ThikShak');
      setIsOutOfStock(true);
      // Automatically close the modal after 2 seconds
      setTimeout(() => {
        setIsOutOfStock(false);
      }, 2000);
    }
  };

  // Close the modal manually (optional)
  const closeModal = () => {
    setIsOutOfStock(false);
  };

  console.log('CocoData:', CocoData);
  console.log('ThikShakData:', ThikShakData);
  console.log('isOutOfStock:', isOutOfStock);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">This is React Redux</h1>
      
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
          disabled={CocoData === 0}
        >
          Buy Coco
        </button>
      </div>

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
          disabled={ThikShakData === 0}
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
