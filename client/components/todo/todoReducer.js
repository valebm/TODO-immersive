// todos reducer
import uuid from 'uuid/v1'

const DEFAULT_STATE = {
  todos: []
}

const todos = (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: uuid(),
          value: action.value,
          done: false
        }],
      }
    case 'UPLOAD_TODOS':
    console.log(action.value)
      return {
        ...state,
        todos: action.value,
      } 
    default:
      return state
  }
}

export default todos