import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'


const TodoList = (props) => {
console.log("props", props.todos)
  // Map through the todos
  const todoItems = props.todos.filter(function(el, i) {
      return el.done !== true;
      }).map((todo) => {
        console.log("todo", todo)
    return (<TodoItem todo={todo} key={todo.id}/>)
  });


  return (<div><p>TODO</p><ul>{todoItems}</ul></div>);
}

 export default TodoList;