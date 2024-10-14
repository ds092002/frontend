import './App.css'
import ComA from './context/ComA'
import { createContext } from 'react'

/* ContextAPI :- createContext, Provider, Consumer*/

export const data = createContext();
// const name = 'dhaval';

function App(props) {
  
  let name = 'contextAPI'

  return (
    <>
      {/* <ComA name={name}/>  */}
    <data.Provider value={name}>
      <ComA/>
    </data.Provider>
    </>
  )
}

export default App
