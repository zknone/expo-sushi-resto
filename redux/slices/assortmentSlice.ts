import { createSlice } from "@reduxjs/toolkit";
import { TAssortmentItem } from "../../types/types";

const initialState = [] as TAssortmentItem[];

const AssortmentSlice = createSlice({
  name: "assortment",
  initialState,
  reducers: {
    addNew(state, action) {
      state.push(action.payload);
    },
    removeOne(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    addAssortment(state, action) {
      return [...state, ...action.payload];
    },
  },
});

export const { addNew, removeOne, addAssortment } = AssortmentSlice.actions;
export default AssortmentSlice.reducer;
