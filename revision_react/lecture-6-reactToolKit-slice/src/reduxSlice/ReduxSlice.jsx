import { createSlice } from "@reduxjs/toolkit";

const combinedSlice = createSlice({
  name: 'products',
  initialState: {
    NumOfCake: 20,
    NumOfCoco: 20,
  },
  reducers: {
    incrementCake: (state) => {
      state.NumOfCake += 1;        // state.NumOfCake = state.NumOfCake + 1
    },
    decrementCake: (state) => {
      state.NumOfCake -= 1;        // state.NumOfCake = state.NumOfCake - 1
    },
    incrementCoco: (state) => {
      state.NumOfCoco += 1;        // state.NumOfCoco = state.NumOfCoco + 1
    },
    decrementCoco: (state) => {
      state.NumOfCoco -= 1;        // state.NumOfCoco = state.NumOfCoco - 1
    }
  }
});

export const { incrementCake, decrementCake, incrementCoco, decrementCoco } = combinedSlice.actions;

export default combinedSlice.reducer;
