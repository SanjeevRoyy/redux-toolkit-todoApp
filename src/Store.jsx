import { configureStore, createSlice } from '@reduxjs/toolkit';
import TodoReducer from './TodoSlice'

//  const { addTodo, removeTodo } = todoSlice.actions;

export default configureStore({
  reducer: {
    todos: TodoReducer,
  },
});
