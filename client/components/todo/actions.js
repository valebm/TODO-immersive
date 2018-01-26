// todo actions

const ADD_TODO = 'ADD_TODO'
const UPLOAD_TODOS = 'UPLOAD_TODOS'

export const addTodo = value => {
  return {
    type: ADD_TODO,
    value
  }
}

export const uploadTodos = value => {
  return {
    type: UPLOAD_TODOS,
    value
  }
}