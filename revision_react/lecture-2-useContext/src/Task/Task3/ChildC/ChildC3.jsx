import React from 'react'
import { useContext } from 'react'
import { data3 } from '../MainParCom'

const ChildC3 = () => {

  const data = useContext(data3)

  return (
    <div>
        <h1 className='heading'>This is Components Child C3 {data}</h1>
    </div>
  )
}

export default ChildC3