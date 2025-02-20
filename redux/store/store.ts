import { configureStore } from "@reduxjs/toolkit";
import assortmentReducer from "../slices/assortmentSlice";

const store = configureStore({
  reducer: {
    assortment: assortmentReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
