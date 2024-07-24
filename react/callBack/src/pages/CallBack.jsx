import React from 'react'
import Child from './Child'
import { useState, useCallback } from 'react'

const CallBack = () => {
    
    const [ count, setCount] = useState(0);

    const Increment = useCallback(() => setCount(count + 1))
  
    return (
    <div>
        <h1 className='heading'>This is React useCallback Hook</h1>
        <Child/>
        <span className='btn'>{count}</span>
        <button onClick={Increment} className='btn'>Increment</button>
    </div>
  )
}

export default CallBack