import React from 'react'
import { useState, useMemo } from 'react'

const UseMemo = () => {

    const [num, setNum] = useState(1);

    const [count, setCount] = useState(7);

    const longCalc = (num) => {
        console.log('Caluculate..');
        let total = 0;
        for( let i = 0; i < 1e7; i++) {
            total += i % num;
        }
        return total
    }

    const calculateValuesIs = useMemo (() => longCalc(num), [num])
  
  
    return (
    <div>
        <h1 className='heading'>This is React useMemo Hooks {num}</h1>
        {
            calculateValuesIs
        }
        <button onClick={() => setNum(num + 1)}>Increment</button>
        <button onClick={() => setCount(count + 1)}>UpdateCount {count}</button>
    </div>
  )
}

export default UseMemo