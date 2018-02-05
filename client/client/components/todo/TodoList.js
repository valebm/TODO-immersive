import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'


const TodoList = (props) => {
  // Map through the todos
  return (
    <div className="todoList">
      <ul>
        {
          props.todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} deleteTodo={props.deleteTodo} updateTodo={props.updateTodo}/>
          })
        }
      </ul>
    </div>
  )

}

 export default TodoList;