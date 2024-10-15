import React from 'react'
// import { data } from '../App'
import { useContext } from 'react'

const ComA3 = () => {

  const datas = useContext(data);
  return (
    <div>
      <h1 className='heading'>This is Components ComA3</h1>
      {datas}
    </div>
  )
} 

export default ComA3
 