import React from 'react'
import { UserContext1, UserContext2 } from './MainCom'

const ComponentC = () => {
  return (
    <div>
        <UserContext1>
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
        </UserContext1>
    </div>
  )
}

export default ComponentC