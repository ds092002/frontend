import React from 'react'
import { useContext } from 'react'
import { data1 } from '../MainParCom'


const ChildA3 = () => {
  const datas1 = useContext(data1)
  return (
    <div>
      <h1 className='heading'>This is Components Child A3 {datas1}</h1>
    </div>
  )
}

export default ChildA3