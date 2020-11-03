import React from 'react'
import Todo from './Todo'
import './App.css'

export default function TodoList({todos,setTodos}) {

    

    return (
        <div className="todo-list">
               {     
               todos.map( todo => {
                  return(
                    <Todo 
                    key={todo.id}
                    todo = {todo}
                    todos = {todos}
                    setTodos = {setTodos}
                    text={todo.text}
                   />
                  )
               })
               }
        </div>
    )
}
