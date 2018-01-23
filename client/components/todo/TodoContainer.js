import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

const uuidv1 = require('uuid/v1');
// Contaner Component


class TodoContainer extends React.Component{

  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      todos: [],
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleErase = this.handleErase.bind(this);

    }

  handleChange(event){
    this.setState({value: event.target.value});
    console.log(this.state.value)
   }

   handleSubmit(event){
   	var todo = {}
   	todo.id = uuidv1();
    todo.val = this.state.value;
    todo.done = false;
    this.setState({todos: [...this.state.todos, todo]});
    console.log(this.state.todos)
   }
      
   handleRemove(event){
   	var id = event.target.parentNode.getAttribute('id')
   	this.state.todos.map(function(item) {
      if (item.id == id){
        item.done = true;       
      }
    });
   	console.log(this.state.todos)
   	this.setState({todos: this.state.todos});

   }

   handleErase(event){
   	var id = event.target.parentNode.getAttribute('id')

    this.state.todos = this.state.todos.filter(function(el, i) {
      	return id !== el.id;
    });

   	console.log(this.state.todos)
   	this.setState({todos: this.state.todos});
   }

  render(){
    // Render JSX
    console.log(this.state)
    return (

     <div>
      TODO
      <input type="text" id="todoVal" value={this.state.value} onChange={this.handleChange}></input>
      <button id="addTodoButt" onClick={this.handleSubmit}>Add</button>
      <TodoList todos={this.state.todos} remove={this.handleRemove} erase={this.handleErase}/>           
    </div> 
    );
  }
}


 export default TodoContainer;