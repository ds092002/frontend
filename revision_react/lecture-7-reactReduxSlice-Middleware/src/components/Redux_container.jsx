import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../reduxSlice/reduxSlice'

const Redux_container = () => {
    const NumOfCake = useSelector(state => state.counter.NumOfCake)
    const NumOfCoco = useSelector(state => state.counter.NumOfCoco)

    const dispatch = useDispatch()

    return (
        <div>
            <h1>This is React Redux</h1>
            <div>Cakes: {NumOfCake}</div>
            <div>Cocos: {NumOfCoco}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Redux_container
