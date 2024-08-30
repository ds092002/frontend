import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Axios = () => {

    const data = { 
        fname: '',
        lname: ''
    }

    const [inputData, setInputData] = useState(data)

    const hnadleChange = (e) => {
        setInputData({...inputData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/ecomall', inputData)
        .then((res) => {
            console.log(res);
        })
    }
    const handleUpadate = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/ecomall/1', inputData)
        .then((res) => {
            console.log(res);
        })
    }
    const handleDelete = (e) => {
        e.preventDefault()
        axios.delete('http://localhost:3000/ecomall/1', inputData)
        .then((res) => {
            console.log(res);
        })
    }

    return (
    <div>
      <h1 className='bg-green-600 p-4 text-white italic text-4xl text-center'>React Axios Post , put and Delete API</h1>
      <div className='flex justify-center items-center h-screen'>
        <div>
            <input className='border-2 border-black block' type="text" name='fname' placeholder='First Name' id='' value={inputData.fname} onChange={hnadleChange}/>
            <input  className='border-2 border-black block my-4' type="text" name='lname' placeholder='Last Name' id='' value={inputData.lname} onChange={hnadleChange}/>
            <button className='p-2 bg-yellow-500 text-white ' onClick={handleSubmit}>POST</button>
            <button className='p-2 bg-yellow-500 text-white mx-4' onClick={handleUpadate}>PUT</button>
            <button className='p-2 bg-yellow-500 text-white' onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    </div>
  )
}

export default Axios
