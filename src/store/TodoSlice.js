import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todoItems',
  initialState: [
    { id: '1', text: 'Todo 1', completed: true },
    { id: '2', text: 'Todo 2', completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoComplete: (state, action) => {
      const todo = state.find((todoItem) => todoItem.id === action.payload.id);
      todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;
