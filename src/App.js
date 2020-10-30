import React, {useState} from 'react'
import Form from './Form';
import TodoList from './TodoList'
import './App.css';

function App() {

     const[inputText ,setInputText] = useState('');
     const[todos,setTodos] = useState([])

  return (
    <div className="App">
       <h1>Add Todo Here</h1>
        <Form 
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}/>

        <TodoList
          todos = {todos}
          setTodos = {setTodos}
          inputText={inputText}/>
    </div>
  );
}

export default App;
