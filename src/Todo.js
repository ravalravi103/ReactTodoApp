import React from 'react'


function Todo({text,todo,todos,setTodos}) {

    // Remove Handler
     const removeHandler = () => {
       setTodos(todos.filter(el => el.id !== todo.id));
     }

     
     // DoneHandler
     const doneHandler = () => {
         setTodos(todos.map(item =>item.id === todo.id ?
            {...item, completed : !item.completed} : item
         ))
     }

     // check Handler
     const checkHandler = (e) => {  
         setTodos(todos.map(item => item.id === todo.id? {
            ...item,check: !item.check
        } : item))
     }

    return (
        <div className="todo">
             <div className="todo-sub">
                <input type="checkbox" onChange={checkHandler} className="done-checkbox"/>
               <li className={(todo.completed)? "todo-item completed": "todo-item"}>{text}</li>
             </div>
              <button className="done-btn" onClick={doneHandler}>Done</button>
              <button className="remove-btn" onClick={removeHandler}>Remove</button>
        </div>
    )
}

export default Todo
