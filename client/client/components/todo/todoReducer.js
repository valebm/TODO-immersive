// todos reducer
const DEFAULT_STATE = {
  loading: false,
  todos: [],
  error: '',
  id: ''
}

const todos = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_TODOS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_TODOS_SUCCESS':
      return {
        ...state,
        loading: false,
        todos: action.todos
      }
    case 'GET_TODOS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case 'ADD_TODO_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'ADD_TODO_SUCCESS':
      return {
        todos: [...state.todos, { ...action.todo }],
        loading: false,
      }
    case 'ADD_TODO_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      } 

    case 'DELETE_TODO_REQUEST':
      return {
        ...state,
        loading: true      
      }
    case 'DELETE_TODO_SUCCESS':
      return {
        todos: state.todos.filter(item => {return item.id !== action.id;}),
        loading: false
      }
    case 'DELETE_TODO_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case 'UPDATE_TODO_REQUEST':
      return {
        ...state,
        loading: true      
      }
    case 'UPDATE_TODO_SUCCESS':
      return {
        ...state,
        loading: false
      }
    case 'UPDATE_TODO_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}


export default todos