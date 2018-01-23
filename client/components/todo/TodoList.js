import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';


const TodoList = ({todos, remove, erase}) => {
  // Map through the todos
  const todoItems = todos.filter(function(el, i) {
      return el.done !== true;
      }).map((todo) => {
    return (<TodoItem todo={todo} remove={remove} key={todo.id}/>)
  });

  const doneItems = todos.filter(function(el, i) {
      return el.done !== false;
      }).map((todo) => {
    return (<TodoItem todo={todo} remove={erase} key={todo.id}/>)
  });

  return (<div><p>TODO</p><ul>{todoItems}</ul><p>DONE</p><ul>{doneItems}</ul></div>);
}

 export default TodoList;