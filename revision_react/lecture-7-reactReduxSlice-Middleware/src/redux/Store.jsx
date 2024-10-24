import { configureStore } from '@reduxjs/toolkit' 
import logger from 'redux-logger' // Importing logger middleware
import counterReducer from '../reduxSlice/reduxSlice' // Importing the counter reducer

// Creating a Redux store with the counter reducer and logger middleware
const Store = configureStore({
    reducer: {
        counter: counterReducer, // Connecting the counter reducer to the store
    },
    // Adding the logger middleware for logging actions and state changes in the console
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default Store // Exporting the configured store
