import React from 'react';
import '../../App.css'


export default function TodoItem({id,name,doneHandler,cancleHandler,doneClass}) {
    return (
        <div id={id} className="singleTodoItem">
            <li className={(doneClass)? "todoItemtext cencleText" :"todoItemtext"}>{name}</li>
            <button className="doneBtn" onClick={doneHandler}>Done</button>
            <button className="cancleBtn" onClick={cancleHandler}>Completed</button>
        </div>
    )
}
