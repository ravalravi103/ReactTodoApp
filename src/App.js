import React, {useState} from 'react'
import Form from './Form';
import TodoList from './TodoList'
import './App.css';

function App() {

     const[inputText ,setInputText] = useState('');
     const[todos,setTodos] = useState([]);

     // Done Multiple
     const doneMultipleHandler = () => {
         setTodos(todos.map(item => item.check ? 
          {...item,completed :!item.completed} :
          {...item, completed : item.completed
        }))
     }

    //  Remove Multiple
     const removeMultipleHandler = () => {
         setTodos(todos.filter(item => !item.check ?item: null)) 
     }

  return (
    <div className="App">
       <h1>Add Todo Here</h1>
       <div className="handle-multiple">
          <button className="done-multiple" onClick={doneMultipleHandler}>Done Multiple</button>
          <button className="remove-multiple" onClick={removeMultipleHandler}>Remove Multiple</button>
       </div>
        <Form 
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}/>

        <TodoList
          todos = {todos}
          setTodos = {setTodos}
          inputText={inputText}
         />
    </div>
  );
}

export default App;
