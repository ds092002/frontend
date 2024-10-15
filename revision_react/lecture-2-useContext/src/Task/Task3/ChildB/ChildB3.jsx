import React from 'react'
import { useContext } from 'react'
import { data2 } from '../MainParCom'

const ChildB3 = () => {

  const data = useContext(data2)

  return (
    <div>
        <h1 className='heading'>This is Components Child B3 {data}</h1>
    </div>
  )
}

export default ChildB3