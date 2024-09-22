import { configureStore } from "@reduxjs/toolkit";
import cafeReduxer from "~/features/cafes/cafesSlice";

export const store = configureStore({
  reducer: {
    cafes: cafeReduxer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
