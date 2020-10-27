import React from 'react';
import TodoHeader from './Component/TodoHeader/TodoHeader';
import ToDoList from './Component/TodoList/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
         <TodoHeader />
         <ToDoList />
    </div>
  );
}

export default App;
