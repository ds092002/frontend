import React from 'react'
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchUserRequest } from './userSlice'

const UserData = () => {
  
    const [data, setData] = useState([])

    console.log(data);
    
    const dispatch = useDispatch()

    const user = useSelector((state) => state.myData)
    const loading = useSelector((state) => state.myData)
    const error = useSelector((state) => state.myData)
  
    useEffect(() => {
        dispatch(fetchUserRequest())
        setData(user)
    }, [dispatch])

    {loading && <p>Loading.......</p>}
    {error && <p>Error...{error}</p>}

    return (
    <div>
        <h1>User Data</h1>
        <div>
            <p>{user.data.firstName}</p>
            <p>{user.data.email}</p>
            <img src={user.data.image} alt="no" />
        </div>
    </div>
  )
}

export default UserData