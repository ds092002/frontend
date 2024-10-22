import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import counterReducer from '../reduxSlice/reduxSlice'

const Store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default Store
