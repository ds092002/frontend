import React from 'react'
import ChildA from './ChildA/ChildA'
import ChildB from './ChildB/ChildB'
import ChildC from './ChildC/ChildC'
import { createContext } from 'react'

export const data1 = createContext();
const name1 = 'Nested Com Child A3'

export const data2 = createContext();
const name2 = 'Nested Com Child B3'

export const data3 = createContext();
const name3 = 'Nested Com Child C3'

const MainParCom = () => {
  return (
    <>
        <data1.Provider value={name1}>
            <ChildA/>
        </data1.Provider>
        <data2.Provider value={name2}>
            <ChildB/>
        </data2.Provider>
        <data3.Provider value={name3}>
            <ChildC/>
        </data3.Provider>
    </>
  )
}

export default MainParCom