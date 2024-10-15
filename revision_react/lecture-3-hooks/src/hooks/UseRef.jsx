import React from 'react'
import { useRef, useState } from 'react'

const UseRef = () => {

    const [formData, setFormData] = useState({
        fullName: ''
    })

    console.log(formData);
    
    const referenceValue = useRef(null)
    const divref = useRef(null)

    console.log(divref);

    const divStyle = () => {
        divref.current.style.backgroundColor = 'yellow'
        divref.current.style.width = '200px'
        divref.current.style.hieght = '200px'
    }

    // const Profile = () => {
    //     fullName:referenceValue
    // }

    // const Update = () => {
    //     referenceValue.current.style.backgroundColor = 'green'
    // }

    console.log(referenceValue);
    
    
  return (
    <div>
        <h1>This is React useRef Hook</h1>
        <input ref={referenceValue} className='border border-black' type="text" name="fullName" id="" onChange={(e) => setFormData({ ...formData, [e.target.name] : e.target.value})}/>
        <div ref={divref}></div>
        <button onClick={divStyle}>Click me</button>
    </div>
  )
}

export default UseRef