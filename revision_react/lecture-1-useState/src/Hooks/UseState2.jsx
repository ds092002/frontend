import React,{useState} from 'react'

const UseState2 = () => {

  
//   const[fullName, setFullName] = useState('')
//   const[email, setEmail] = useState('')
//   const[password, setPassword] = useState('')

//   console.log(fullName)
//   console.log(email)
//   console.log(password)

  const [formData, setFromData] = useState({
    fullName:'',
    email:'',
    password:''
  })

  console.log('fromdata', formData);

//   const handleFormData = (e) => {
//     e.preventDefault()
//     const fromData = {
//         fullName: e.target.value,
//         email: e.target.value,
//         password: e.target.value
//     }
//     console.log(fromData);
//   }

    //   const handleFormData = (e) => {
    //     e.preventDefault()
    //     setFullName('')
    //     setEmail('')
    //     setPassword('')
    //   }

  return (
    <div>
           <h1 className='p-2 bg-sky-400 text-white text-center'>This is React useState Hook</h1>
           {/* <form>
            <label htmlFor="fullName">Fullname</label>
            <input type="text" name="fullName" id="fullName" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <button type='submit' onClick={handleFromData}>Submit</button>
           </form> */}

           <form>
            <label htmlFor="fullName">Fullname</label>
            <input type="text" name="fullName" id="fullName" onChange={(e) => setFromData({...formData, [e.target.name]:e.target.value})}/><br/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={(e) => setFromData({...formData , [e.target.name]:e.target.value})} /><br/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={(e) => setFromData({...formData , [e.target.name]:e.target.value})} /><br/>
            <button type="submit">submit</button>
           </form>
    </div>
  )
}

export default UseState2