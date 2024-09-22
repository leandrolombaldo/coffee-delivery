// src/features/cafes/cafesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CafeState {
  quantities: { [id: string]: number };
  total: number;
}

const initialState: CafeState = {
  quantities: {},
  total: 0,
};

const cafesSlice = createSlice({
  name: "cafes",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.quantities[id] = (state.quantities[id] || 0) + 1;
      state.total = Object.values(state.quantities).reduce((acc, quantity) => {
        return acc + quantity;
      }, 0);
    },
    decrement: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.quantities[id] = Math.max((state.quantities[id] || 0) - 1, 0);
      state.total = Object.values(state.quantities).reduce((acc, quantity) => {
        return acc + quantity;
      }, 0);
    },
  },
});

export const { increment, decrement } = cafesSlice.actions;
export default cafesSlice.reducer;
