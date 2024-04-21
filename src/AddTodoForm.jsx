import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from './TodoSlice';
import './styles.css'; // Import CSS here

const AddTodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo({
      id: nanoid(),
      text,
    }));
    setText('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}> {/* Apply class here */}
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
