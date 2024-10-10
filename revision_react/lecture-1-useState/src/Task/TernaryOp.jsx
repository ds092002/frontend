import React,{useState} from 'react'
import SwitchCase from './SwitchCase';

const TernaryOp = () => {
    
    const [isLogIn, setIsLogIn] = useState(false);
  
    return (
    <div>
        <h1 className='p-2 bg-pink-400 text-white text-center'>Ternary Op Conditional Rendering</h1>
        <div className='p-4 text-center'>
        <div>{isLogIn ? "You Log in SucessFully" : "Please Log in First"}</div>
        <button onClick={() => setIsLogIn(!isLogIn)} className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">{isLogIn ? "Logout" : "Login"}</button>
        </div>
        <SwitchCase/>
    </div>
  )
}

export default TernaryOp