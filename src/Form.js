import React from 'react'

function Form({ inputText,setInputText,todos,setTodos}) {

    const inputTextHnadler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHnadler = (e) => {
         setTodos([
             ...todos,{text:inputText,completed: false,id: Math.random()*1000}
            ])
        setInputText('');
    }

    return (
      <div className="form">
           <input 
              className="form-input"
              onChange={inputTextHnadler}
              type="text" 
              value={inputText}
              placeholder="Add Todo Here"/>

           <button onClick={submitTodoHnadler} className="form-submit-btton">Add Todo</button>
     </div>
    )
}

export default Form
