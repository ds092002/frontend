// Importing React and necessary hooks for state and effect management
import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserRequest } from './userSlice' // Importing action to fetch user data

const UserData = () => {

    // Local state for storing the user data
    const [data, setData] = useState([])

    console.log(data); // Logging the local state

    const dispatch = useDispatch() // Using dispatch to send actions

    // Using selectors to access 'myData' state from the Redux store
    const user = useSelector((state) => state.myData)
    const loading = useSelector((state) => state.myData.loading) // Selecting loading state
    const error = useSelector((state) => state.myData.error)     // Selecting error state

    // useEffect to dispatch 'fetchUserRequest' when component mounts
    useEffect(() => {
        dispatch(fetchUserRequest()) // Dispatching action to fetch user data
        setData(user)                // Updating local state with fetched user data
    }, [dispatch])

    // Rendering loading or error message based on state
    {loading && <p>Loading.......</p>}
    {error && <p>Error...{error}</p>}

    return (
    <div>
        <h1>User Data</h1>
        <div>
            {/* Displaying user data (firstName and email) */}
            <p>{user.data.firstName}</p>
            <p>{user.data.email}</p>
            {/* Displaying user image */}
            <img src={user.data.image} alt="no" />
        </div>
    </div>
  )
}

// Exporting the UserData component
export default UserData
