import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import './styles.css'

const App = () => {
  return (
    <Provider store={store}>
      <div className='mainDiv'>
        <h1>Todo App</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
