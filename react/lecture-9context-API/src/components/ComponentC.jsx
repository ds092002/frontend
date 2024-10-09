import React from 'react'
import { UserContext1, UserContext2 } from './MainCom'
import { useContext } from 'react'

const ComponentC = () => {
 
    let firstName = useContext(UserContext1)
    let LastName = useContext(UserContext2)
 
    return (
    <div>
        <h1 className='heading'>My Name is {firstName} and my Last name is {LastName}</h1>
        {/* <UserContext1>
        {
            (firstName) => {
                return (
                    <>
                        <UserContext2>
                            {
                                (lastName) => {
                                    return (
                                        <>
                                            <h1 className='heading'>This is ComponentC From {firstName} {lastName}</h1>
                                        </>
                                    )
                                }
                            }
                        </UserContext2>
                    </>
                )
            }
        }
        </UserContext1> */}
    </div>
  )
}

export default ComponentC