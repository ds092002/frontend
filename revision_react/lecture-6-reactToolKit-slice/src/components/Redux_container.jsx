import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment,decrement } from '../reduxSlice/ReduxSlice'

const Redux_container = () => {

    const sliceData = useSelector(state => state.cake.NumOfCake)

    console.log(sliceData);

    const dispatch = useDispatch()
    
  return (
    <div>
        <h1 className='heading'>This is React redux tool kit</h1>
        <div>{sliceData}</div>
        <button className='btn' onClick={() => dispatch(increment())}>Increment</button>
        <button className='btn' onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Redux_container