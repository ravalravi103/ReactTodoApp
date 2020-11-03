import React, {useState} from 'react'
import Form from './Form';
import TodoList from './TodoList'
import './App.css';

function App() {

     const[inputText ,setInputText] = useState('');
     const[todos,setTodos] = useState([]);

     // Done Multiple
     const doneMultipleHandler = () => {
         setTodos( todos.map(item => {
          if(item.check){
            return ({
              ...item,completed :!item.completed
            })
          }
          else {
            return ({
              ...item, completed : item.completed
            })
          }
          return item 
       }))
          console.log(todos)
     }

    //  Remove Multiple
     const removeMultipleHandler = () => {
        console.log(todos)
         setTodos(todos.filter(item => {
            if(!item.check){
              return item
            }
        }))   
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
