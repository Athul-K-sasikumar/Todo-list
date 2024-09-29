import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import AllTodos from './components/AllTodos';
import CompletedTodos from './components/CompletedTodos';
import DeleteTodo from './components/DeleteTodo';
import './App.css'

function App() {

  return (
  
    <Router>
    <h2 className='p7'>TODO LIST</h2>
    <div className='pl'>
   

      <div className='p12'>
       
          <h2><Link className='' to="/">Add Todo</Link></h2>
          <h2><Link to="/all-todos">All Todos</Link></h2>
          <h2><Link to="/completed-todos">Completed Todos</Link></h2>
          <h2><Link to="/manage-todos">Manage Todos</Link></h2>
      
      </div>

      <Routes>
        <Route path="/" element={<AddTodo />} />
        <Route path="/all-todos" element={<AllTodos />} />
        <Route path="/completed-todos" element={<CompletedTodos />} />
        <Route path="/manage-todos" element={<DeleteTodo />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
