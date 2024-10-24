import React from 'react'
import { useSelector, useDispatch } from 'react-redux' 
import { increment, decrement } from '../reduxSlice/reduxSlice' 

// React component using Redux
const Redux_container = () => {
    // Accessing the state variables (NumOfCake and NumOfCoco) from the Redux store using useSelector
    const NumOfCake = useSelector(state => state.counter.NumOfCake)
    const NumOfCoco = useSelector(state => state.counter.NumOfCoco)

    // Using dispatch to send actions to the Redux store
    const dispatch = useDispatch()

    return (
        <div>
            <h1>This is React Redux</h1>
            {/* Displaying the values from the Redux store */}
            <div>Cakes: {NumOfCake}</div>
            <div>Cocos: {NumOfCoco}</div>
            {/* Dispatch actions to increment or decrement the state */}
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>                                                                            
    )
}

export default Redux_container
