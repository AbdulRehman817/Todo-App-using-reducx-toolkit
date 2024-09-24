import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Reducers/todoslice.js";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
