import React from 'react';
import './TodoHeader.css';


export default function TodoHeader() {

    function todoText(e){
        return e.target.value
    }

    return (
        <div className="todoHeader">
            <input type="text"
             className="todoHeader__input" 
             placeholder="Enter Todo Here"/>

             <button
             onClick={(e)=> todoText(e)} 
             className="todoHeader__add">Add Todo</button>
        </div>
    )
}
