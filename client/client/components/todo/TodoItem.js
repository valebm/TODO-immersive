import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

const TodoItem = (props) => {
  // Each Todo
  return (<li id={props.todo.id} key={props.todo.id}>{props.todo.val}<button onClick={props.deleteTodo}>Erase</button><button onClick={props.updateTodo}>Done</button></li>);
}

 export default TodoItem;

