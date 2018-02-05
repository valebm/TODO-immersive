import { createStore, applyMiddleware  } from 'redux'
import todoReducer from './todo/todoReducer'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import ReduxThunk from 'redux-thunk'

const store = createStore(todoReducer, composeWithDevTools(
  applyMiddleware(
    ReduxThunk,
  ),
))

export default store