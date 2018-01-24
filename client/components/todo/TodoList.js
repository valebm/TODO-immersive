import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'


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

 TodoList.propTypes = {
 	todos: PropTypes.array,
 	remove: PropTypes.func,
 	erase: PropTypes.func,
 }

  TodoList.defaultProps = {
 	todos: [],
 	remove: () => { },
 	erase: () => { },
 }

 export default TodoList;