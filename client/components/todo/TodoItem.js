import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

const TodoItem = (props) => {
  // Each Todo
  return (<li key={props.todo.id}>{props.todo.val}<button id="doneTodoButt">Done</button></li>);
}


 export default TodoItem;

