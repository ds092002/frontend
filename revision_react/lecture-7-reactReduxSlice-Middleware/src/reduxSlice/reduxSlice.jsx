import { createSlice } from '@reduxjs/toolkit'

// Creating a slice of the Redux store with initial state and reducers
const reduxSlice = createSlice({
    name: 'counter', // Slice name
    initialState: {
        NumOfCake: 20, // Initial number of cakes
        NumOfCoco: 30, // Initial number of cocos
    },
    // Defining reducers for handling state changes
    reducers: {
        // Increment action: increase both cake and coco counts by 1
        increment: (state) => {
            state.NumOfCake += 1;
            state.NumOfCoco += 1;
        },
        // Decrement action: decrease both cake and coco counts by 1
        decrement: (state) => {
            state.NumOfCake -= 1;
            state.NumOfCoco -= 1;
        },
    },
})

// Exporting the action creators
export const { increment, decrement } = reduxSlice.actions
// Exporting only the reducer function from the slice for the store configuration
export default reduxSlice.reducer
