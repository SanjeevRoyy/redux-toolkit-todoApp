import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTodo, removeTodo } from './TodoSlice';
import './styles.css'; // Import CSS here
import { useState } from 'react';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  const [editText, setEditText] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);

  const handleRemoveTodo = id => {
    dispatch(removeTodo(id));
  };

  const handleEditInputChange = (event) => {
    setEditText(event.target.value);
  };

  const handleEditButtonClick = (id, text) => {
    setEditingTodoId(id);
    setEditText(text);
  };

  const handleSaveEdit = (id) => {
    dispatch(editTodo({
      id,
      text: editText
    }));
    setEditingTodoId(null);
    setEditText('');
  };


  return (
    <ul className="todo-list">
    {todos.map(todo => (
      <li key={todo.id} className="todo-item">
        {editingTodoId === todo.id ? (
          <>
            <input
              type="text"
              value={editText}
              onChange={handleEditInputChange}
            />
            <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
          </>
        ) : (
          <>
            {todo.text}
            <div>
              <button onClick={() => handleEditButtonClick(todo.id, todo.text)}>Edit</button>
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </div>
          </>
        )}
      </li>
    ))}
  </ul>

  );
};

export default TodoList;
