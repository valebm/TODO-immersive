// todo actions
import uuid from 'uuid/v1'
// todo actions
const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST'
const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE'
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE'
const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST'
const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'
const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE'
const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST'
const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS'
const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE'

// API URL Constant
const API_URL = 'http://localhost:3000/todos'


export function addTodo(value) {
    return function (dispatch) {
    dispatch({
      type: ADD_TODO_REQUEST
    })
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: uuid(),
        val: value,
        done: false
      }),
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: ADD_TODO_SUCCESS,
          todo: data
        })
      })
      .catch(error => {
        dispatch({
          type: ADD_TODO_FAILURE,
          error: error
        })
      })
  }
}

export function uploadTodos(){
    return function (dispatch) {
    dispatch({
      type: GET_TODOS_REQUEST
    })
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_TODOS_SUCCESS,
          todos: data
        })
      })
      .catch(error => {
        dispatch({
          type: GET_TODOS_FAILURE,
          error: error
        })
      })
  }
}


export function deleteTodo(value) {
    return function (dispatch) {
    dispatch({
      type: DELETE_TODO_REQUEST
    })
    fetch(`${API_URL}/${value}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: DELETE_TODO_SUCCESS,
          id: value
        })
      })
      .catch(error => {
        dispatch({
          type: DELETE_TODO_FAILURE,
          error: error
        })
      })
  }
}

export function updateTodo(value) {
    return function (dispatch) {
    dispatch({
      type: UPDATE_TODO_REQUEST
    })
    fetch(`${API_URL}/${value}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        done: true
      })
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: UPDATE_TODO_SUCCESS,
          id: value
        })
      })
      .catch(error => {
        dispatch({
          type: UPDATE_TODO_FAILURE,
          error: error
        })
      })
  }
}

