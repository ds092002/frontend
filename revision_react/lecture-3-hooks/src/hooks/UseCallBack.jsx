import React from 'react'
import Count from './Count'
import { useState, useCallback } from 'react'


/* CachedFunction = usecallback(fn, dependencies) */

/* useCallback, React.memo */

const UseCallBack = (props) => {

    const [num, setNum] = useState(0);
    const [count, setCount] = useState(0);

    const Increment = useCallback(
        () => {
            setNum(num + 1)
        }, [num]
    );

    const UpdateChild = () => {
        setCount ( count + 1)
    }

  return (
    <div>
        <h1 className='heading'>This is React useCallback Hooks {num}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={UpdateChild}>UpdateChild</button>
        <Count value={count}/>
    </div>
  )
}

export default UseCallBack