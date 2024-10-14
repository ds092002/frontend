import React from 'react'
import ComA2 from './ComA2'

// const ComA1 = (props) => {
//   return (
//     <div>
//       <h1 className='heading'>This is Components ComA1 {props.name}</h1>
//       <ComA2 name={props.name}/>
//     </div>
//   )
// } 
const ComA1 = () => {
  return (
    <div>
      <h1 className='heading'>This is Components ComA1</h1>
      <ComA2/>
    </div>
  )
} 

export default ComA1
 