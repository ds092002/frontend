import { createSlice } from '@reduxjs/toolkit'

const reduxSlice = createSlice({
    name: 'counter',
    initialState: {
        NumOfCake: 20,
        NumOfCoco: 30,
    },
    reducers: {
        increment: (state) => {
            state.NumOfCake += 1;
            state.NumOfCoco += 1;
        },
        decrement: (state) => {
            state.NumOfCake -= 1;
            state.NumOfCoco -= 1;
        },
    },
})

export const { increment, decrement } = reduxSlice.actions
export default reduxSlice.reducer // This should export the reducer itself, not the whole slice
