import React, { useState } from 'react'
import TernaryOp from './TernaryOp';

const LogicalOp = () => {

  const [hideDetail, setHideDeatil] = useState(true);

  return (
    <div>
      <h1 className='p-2 bg-yellow-300 text-white text-center'>Logical && Conditional Rendering</h1>
      <div className="text-center p-4">
        <div>{hideDetail && <p>Muje Hide karo</p>}</div>
        <button onClick={() => setHideDeatil(!hideDetail)} className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          {hideDetail ? 'Hide' : 'Show'}
        </button>
      </div>
      <TernaryOp />
    </div>
  )
}

export default LogicalOp