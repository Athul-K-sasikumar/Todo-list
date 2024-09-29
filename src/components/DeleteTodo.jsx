import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, completeTodo } from '../redux/todoSlice';

const DeleteTodo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleComplete = (id) => {
    dispatch(completeTodo(id));
  };

  return (
    <div className='p6'>
      <h2>Manage Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.item} - {todo.completed ? "Completed" : "Incomplete"}
            <button className='t1' onClick={() => handleComplete(todo.id)}>
              Complete
            </button>
            <button className='t2' onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteTodo;
