import React from 'react'

// const Header = (props) => {
//   return (
//     <div>
//       <h1 style={{ color: "green"}}>My Name is {props.name} I'm {props.age} year old and my city is {props.city}
//       </h1>
//     </div>
//   )
// }


const Header = ({name, age, city}) => {
  return (
    <div>
      <h1 style={{ color: "green"}}>My Name is {name} I'm {age} year old and my city is {city}
      </h1>
    </div>
  )
}

export default Header
