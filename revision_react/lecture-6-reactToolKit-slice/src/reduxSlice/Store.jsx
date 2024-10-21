import { configureStore } from "@reduxjs/toolkit"
import reduxReducer from './ReduxSlice'

const Store = configureStore( {
    reducer:{
        cake:reduxReducer   // alias from createSlice Reducer as name of the reducer
    }
})

export default Store