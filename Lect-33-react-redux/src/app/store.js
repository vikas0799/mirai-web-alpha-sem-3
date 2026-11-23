import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import likeReducer from '../features/likes/likesSlice';
// import likeReducer from '../features/likes/likesSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer, // state.counter will hold this slice's data
    // like:likeReducer,
    // comment:commentReducer
  },
});