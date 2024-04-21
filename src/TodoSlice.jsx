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
      editTodo: (state, action) => {
        const { id, text } = action.payload;
        const todoToEdit = state.todos.find(todo => todo.id === id);
        if (todoToEdit) {
          todoToEdit.text = text;
        }
    }
    },
  });
  export const  {addTodo,removeTodo,editTodo} = TodoSlice.actions
  export default TodoSlice.reducer