import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "Todos",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({
        title: action.payload.title,
        id: nanoid(), // Unique ID for each todo
      });
    },
    removeTodo: (state, action) => {
      state.todo.splice(action.payload.index, 1); // Remove the todo at the given index
    },
    editTodo: (state, action) => {
      // Update the title of the todo at the specified index
      state.todo[action.payload.index].title = action.payload.editVal;
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
