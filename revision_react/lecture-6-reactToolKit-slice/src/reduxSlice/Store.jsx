import { configureStore } from "@reduxjs/toolkit";
import combinedReducer from './ReduxSlice';

const store = configureStore({
  reducer: {
    products: combinedReducer  
  }
});

export default store;
