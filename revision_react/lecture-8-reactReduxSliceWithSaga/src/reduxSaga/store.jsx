import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import reducer from "./userSlice";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        myData:reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({thunk:false}).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store 