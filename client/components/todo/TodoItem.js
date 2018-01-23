import React from 'react';
import ReactDOM from 'react-dom';

const TodoItem = ({todo, remove}) => {
  // Each Todo
  return (<li id={todo.id}>{todo.val}<button id="doneTodoButt" onClick={remove}>Done</button></li>);
}


 export default TodoItem;

