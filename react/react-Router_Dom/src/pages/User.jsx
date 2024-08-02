import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'


const User = () => {
  
    const [searchparams, setSearchParams] = useSearchParams()

    const Activeusers = searchparams.get('filter') === 'active'
  
    return (
    <div>
        <h1 className=''>THis is User Page</h1>
        <Outlet/>
        <div>
            <button onClick={() => setSearchParams({'filter' : 'active'})}>Active users</button>
            <button onClick={() => setSearchParams({})}>All users</button>
        </div>
        {
            Activeusers ? <h1>All Active Users</h1> : <h1>All Users</h1>
        }
    </div>
  )
}

export default User