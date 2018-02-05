import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { connect } from 'react-redux'
import { addTodo, uploadTodos, deleteTodo, updateTodo } from './actions'

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
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    }

    handleChange(event){
     this.setState({value: event.target.value })
     
   }

   handleSubmit(){
    this.props.addTodo(this.state.value)
    this.setState({ value: '' })
   }

   deleteTodo(event){
    var id = event.target.parentNode.getAttribute('id')
    this.props.deleteTodo(id)
   }

   updateTodo(event){
    var id = event.target.parentNode.getAttribute('id')
    this.props.updateTodo(id)
    console.log("sdf")
   }
      
  render(){
    // Render JSX
    console.log(this.props.deleteTodo)
    return (
     <div>
      TODO
      <input type="text" id="todoVal" value={this.state.value} onChange={this.handleChange}></input>
      <button id="addTodoButt" onClick={this.handleSubmit}>Add</button>
      <TodoList todos={this.props.todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>           
    </div> 
    );
  }


  componentDidMount(dispatch){  
    this.props.uploadTodos()
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: value => dispatch(addTodo(value)),
    uploadTodos:() => dispatch(uploadTodos()),
    deleteTodo: value => dispatch(deleteTodo(value)),
    updateTodo: value => dispatch(updateTodo(value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
