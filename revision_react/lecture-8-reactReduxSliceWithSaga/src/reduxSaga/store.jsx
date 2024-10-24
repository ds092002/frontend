// Importing necessary functions to configure the Redux store
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'  // Importing the root saga
import reducer from "./userSlice"; // Importing the user slice reducer

// Creating a saga middleware instance
const sagaMiddleware = createSagaMiddleware()

// Configuring the Redux store with the reducer and saga middleware
const store = configureStore({
    reducer: {
        myData: reducer  // Attaching user slice reducer to 'myData' in the store
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware) // Adding saga middleware
})

// Running the root saga
sagaMiddleware.run(rootSaga)

// Exporting the store
export default store
