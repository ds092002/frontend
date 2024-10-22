import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCake, decrementCake, incrementCoco, decrementCoco } from '../reduxSlice/ReduxSlice';

const ReduxContainer = () => {
  const sliceDataCake = useSelector(state => state.products.NumOfCake);
  const sliceDataCoco = useSelector(state => state.products.NumOfCoco);

  const dispatch = useDispatch();
    
  return (
    <div>
      <h1 className='heading'>This is React Redux Toolkit</h1>
      <div>{sliceDataCake}</div>
      <button className='btn' onClick={() => dispatch(incrementCake())}>Increment Cake</button>
      <button className='btn' onClick={() => dispatch(decrementCake())}>Decrement Cake</button>
      <div>{sliceDataCoco}</div>
      <button className='btn' onClick={() => dispatch(incrementCoco())}>Increment Coco</button>
      <button className='btn' onClick={() => dispatch(decrementCoco())}>Decrement Coco</button>
    </div>
  );
};

export default ReduxContainer;
