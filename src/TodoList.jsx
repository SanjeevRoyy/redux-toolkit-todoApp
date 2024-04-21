import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from './Store';
import './styles.css'; // Import CSS here

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = id => {
    dispatch(removeTodo(id));
  };

  return (
    <ul className="todo-list"> {/* Apply class here */}
      {todos.map(todo => (
        <li key={todo.id} className="todo-item"> {/* Apply class here */}
          {todo.text} <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
