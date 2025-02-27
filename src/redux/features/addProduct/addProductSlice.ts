import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const addProductSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // includeByProduct: (state, action) => {
    // },
  },
});

export const { increment, decrement,  } = addProductSlice.actions;

export default addProductSlice.reducer;
