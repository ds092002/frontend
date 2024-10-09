import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
  return (
    <div>
        <h1 className='heading'>This is ComponentA</h1>
        <ComponentB/>
    </div>
  )
}

export default ComponentA