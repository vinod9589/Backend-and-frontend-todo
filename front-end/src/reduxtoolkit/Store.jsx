// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../reduxtoolkit/TodoSlice"

// Create the Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store