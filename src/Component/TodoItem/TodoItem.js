import React from 'react';
import '../../App.css'


export default function TodoItem({id,name,doneHandler,cancleHandler}) {
    return (
        <div id={id} className="singleTodoItem">
            <li key={id} className="todoItemtext">{name}</li>
            <button className="doneBtn" onClick={doneHandler}>Done</button>
        </div>
    )
}
