import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const ReduxSlice = createSlice(
  {
      name:'cake',
      initialState:{
        NumOfCake:20
      },
      reducers:{
        increment:(state) => {
          state.NumOfCake += 1 // state.NumOfCake = state.NumOfCake + 1
        },
        decrement:(state) => {
          state.NumOfCake -= 1 // state.NumOfCake = state.NumOfCake - 1
        }
      }  
  }
);

export const {increment, decrement} = ReduxSlice.actions

export default ReduxSlice.reducer;
