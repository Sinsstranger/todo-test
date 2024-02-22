import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '@store/TodoSlice';

export * from '@store/TodoSlice';
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
