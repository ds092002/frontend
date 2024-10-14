import React from 'react'
import ComA1 from './ComA1'

// const ComA = (props) => {
//   return (
//     <div>
//       <h1 className='heading'>This is Components ComA {props.name}</h1>
//       <ComA1 name={props.name}/> 
//     </div>
//   )
// } 
const ComA = () => {
  return (
    <div>
      <h1 className='heading'>This is Components ComA</h1>
      <ComA1/> 
    </div>
  )
} 

export default ComA
