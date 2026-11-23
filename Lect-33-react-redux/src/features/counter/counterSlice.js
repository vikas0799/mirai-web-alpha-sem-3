import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter', // prefix for action types, e.g. 'counter/increment'
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // safe here, thanks to Immer
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // payload = data sent with the action
    },
  },
});

// Action creators are generated for you
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

// The reducer goes into the store
export default counterSlice.reducer;