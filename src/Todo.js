import React from 'react'


function Todo({text,todo,todos,setTodos}) {

    // Remove Handler
     const removeHandler = () => {
       setTodos(todos.filter(el => el.id !== todo.id));
     }

     const doneHandler = () => {
         setTodos(todos.map((item)=>{
             if(item.id === todo.id){
                 return {
                     ...item, completed : !item.completed
                 }
             }
             return item
         }))
     }

    return (
        <div className="todo">
             <div className="todo-sub">
                <input type="checkbox" onChange={doneHandler} className="done-checkbox"/>
               <li className={(todo.completed)? "todo-item completed": "todo-item"}>{text}</li>
             </div>
            {/* <button className="done-btn" onClick={doneHandler}>Done</button> */}
              <button className="remove-btn" onClick={removeHandler}>Remove</button>
        </div>
    )
}

export default Todo
