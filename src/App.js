import React, { Component } from 'react';
import TodoItem from './Component/TodoItem/TodoItem';
import "./App.css";

class App extends Component {
  state = {
    todoName: '',
    cancle: false,
    todoArray: []
  }

  addTodoHandler = () => {
    this.setState({
      //  todoName : this.state.todoName,
      todoArray: this.state.todoArray.concat(this.state.todoName)
    });

   
  }

  onChangeHandler = (e) => {
    this.setState({
      todoName: e.target.value,
      // todoArray: this.state.todoArray
    });
   
  }

  doneHandler = (e) => {
    //Step1 : Create New Array using Spred Operater
    const newArr = [...this.state.todoArray];

    // Remove The Clicke Element from arr using slice or splice 
    newArr.splice(e.target.parentElement.id ,1);
   
    // Assign newArr to the stated object
    this.setState({
       todoArray : newArr
    })
  }


  cancleHandler = (e) => {
    console.log('cancleBtn clicked ')
      this.setState({
        cancle : !this.state.cancle
      })  
  }


  render() {
    return (
      <div className="app">
        <div className="todoApp">
          <div className="head">
            <input type="text" className='todoTextbox' onChange={this.onChangeHandler} />
            <button className="todoAddBtn" onClick={this.addTodoHandler}>Add Todo</button>
          </div>
          <div className="body">
            <ul>
              {this.state.todoArray.map((item, index) => {
                return (
                  <TodoItem
                    id={index}
                    name={item}
                    doneClass={this.state.cancle}
                    doneHandler={this.doneHandler}
                    cancleHandler={this.cancleHandler}
                  />)
              })}
            </ul>
          </div>
        </div>
      </div>


    )
  }
}

export default App
