import React from 'react'
import ComA3 from './ComA3'

// const ComA2 = (props) => {
//   return (
//     <div>
//       <h1 className='heading'>This is Components ComA2 {props.name}</h1>
//       <ComA3 name={props.name}/>
//     </div>
//   )
// } 
const ComA2 = () => {
  return (
    <div>
      <h1 className='heading'>This is Components ComA2</h1>
      <ComA3/>
    </div>
  )
} 

export default ComA2
 