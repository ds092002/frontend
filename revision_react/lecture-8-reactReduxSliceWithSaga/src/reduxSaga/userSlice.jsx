import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice(
    {
        name: 'myData',
        initialState: {
            data:[],
            loading: false,
            error: null
        },
        reducers:{
            fetchUserRequest: (state) => {
                state.loading = true
            },
            fetchUserSuccess: (state, action) => {
                state.data = action.payload,
                state.loading = false
            },
            fetchUserError: (state, action) => {
                state.error = action.payload,
                state.loading = false,
                data = []
            }    
        }
    }
) 

export const {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserError
} = userSlice.actions

export default userSlice.reducer