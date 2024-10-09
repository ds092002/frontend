import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = (props) => {
  return (
    <div>
        <h1 className='heading'>This is Component B {props.name}</h1>
        <ComponentC name={props.name}/>
    </div>
  )
}

export default ComponentB