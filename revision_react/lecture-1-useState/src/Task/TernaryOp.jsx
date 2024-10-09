import React,{useState} from 'react'
import SwitchCase from './SwitchCase';

const TernaryOp = () => {
    
    const [isLogIn, setIsLogIn] = useState(false);
  
    return (
    <div>
        <h1 className='p-2 bg-sky-400 text-white text-center'>Ternary Op Conditional Rendering</h1>
        <div>{isLogIn ? "You Log in SucessFully" : "Please Log in First"}</div>
        <button onClick={() => setIsLogIn(!isLogIn)}>{isLogIn ? "Logout" : "Login"}</button>
        <SwitchCase/>
    </div>
  )
}

export default TernaryOp