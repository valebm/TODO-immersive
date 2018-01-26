import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { connect } from 'react-redux'
import { addTodo, uploadTodos } from './actions'

class TodoContainer extends Component{
    constructor(props){
 
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleChange(event){
     this.setState({value: event.target.value })
     
   }

   handleSubmit(){
    this.props.addTodo(this.state.value)
    this.setState({ value: '' })
   }
      
  render(){
    // Render JSX
    return (
     <div>
      TODO
      <input type="text" id="todoVal" value={this.state.value} onChange={this.handleChange}></input>
      <button id="addTodoButt" onClick={this.handleSubmit}>Add</button>
      <TodoList todos={this.props.todos} />           
    </div> 
    );
  }


  componentDidMount(dispatch){
    const url = 'http://localhost:3000/todos';
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {    
        this.props.uploadTodos(data)
      })
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: value => dispatch(addTodo(value)),
    uploadTodos: value => dispatch(uploadTodos(value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
