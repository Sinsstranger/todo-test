/* eslint-disable no-param-reassign  */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=10',
      );
      if (!response.ok) {
        throw new Error('Error fetching todos');
      }
      return await response.json();
    } catch (e) {
      rejectWithValue({ error: e });
    }
  },
);

const todoSlice = createSlice({
  name: 'todoItems',
  initialState: {
    items: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: new Date().toISOString(),
        title: action.payload.text,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoComplete: (state, action) => {
      const todo = state.items.find(
        (todoItem) => todoItem.id === action.payload.id,
      );
      todo.completed = !todo.completed;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload.error.message;
      });
  },
});

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;
