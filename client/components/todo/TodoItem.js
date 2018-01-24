import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

const TodoItem = ({todo, remove}) => {
  // Each Todo
  return (<li id={todo.id}>{todo.val}<button id="doneTodoButt" onClick={remove}>Done</button></li>);
}


 export default TodoItem;

 TodoItem.propTypes = {
 	todos: PropTypes.array,
 	remove: PropTypes.func,
}

  TodoItem.defaultProps = {
 	todos: [],
 	remove: () => { },
 }