import React from 'react';
import { useSelector } from 'react-redux';

const CompletedTodos = () => {
  const completedTodos = useSelector((state) =>
    state.todos.todos.filter((todo) => todo.completed)
  );

  return (
    <div className='p5'>
      <h2>Completed Todos</h2>
      <ul>
        {completedTodos.map((todo) => (
          <li key={todo.id}>
            <span style={{ color: 'green', marginRight: '10px' }}>✓</span> 
            {todo.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTodos;
