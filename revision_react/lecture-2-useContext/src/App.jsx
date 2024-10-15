import './App.css'
import ComA from './context/ComA'
import { createContext } from 'react'
import Main from './Task/Task1/Main'
import MainCom from './Task/Task2/MainCom'
import MainParCom from './Task/Task3/MainParCom'

/* ContextAPI :- createContext, Provider, Consumer*/

// export const data = createContext();
// const name = 'dhaval';

function App() {
  
  // let name = 'contextAPI'

  return (
    <>
      {/* <ComA name={name}/>  */}
    {/* <data.Provider value={name}>
      <ComA/>
    </data.Provider> */}

    {/* <Main/> */}
    {/* <MainCom/> */}
    <MainParCom/>
    </>
  )
}

export default App
