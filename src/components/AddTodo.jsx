import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../App.css'
import { addTodo } from '../redux/todoSlice';


const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      dispatch(addTodo(todo));
      setTodo('');
    }
  };

  return (
    <div className='p3'>
      <h2 >Add Todo</h2> 
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
