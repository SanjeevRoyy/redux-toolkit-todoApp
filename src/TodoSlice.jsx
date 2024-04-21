
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    todos: [],
  };
  
  export const TodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      addTodo: (state, action) => {
        state.todos.push(action.payload);
      },
      removeTodo: (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      },
    },
  });
  export const  {addTodo,removeTodo} = TodoSlice.actions
  export default TodoSlice.reducer