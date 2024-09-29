import React from 'react';
import { useSelector } from 'react-redux';

const AllTodos = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className='p4'>
      <h2>All Todos</h2>
      <ol>
      {todos.map((todo, index) => (
          <li key={todo.id}>
            <span style={{ color: 'red', marginRight: '10px',paddingRight:'30px' }}>{index+1}</span> 
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.item}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AllTodos;
