//TODO APP

var yo = require('yo-yo')
const uuidv1 = require('uuid/v1');

var state = [];

var el = list(state, add)
 
function list (items, onclick) {

  var input = yo`<input type="text" id="todoVal">`
  console.table(state)
  return yo`<div>
    TODO
    ${input}
    <button id="addTodoButt" onclick=${onclick}>Add</button>
    <p>todo</p>
    <ul>
      ${items.filter(function(el, i) {
      return el.status !== 'done';
      }).map(function (item) {
        return yo`<li id="${item.id}">${item.value}<button onclick=${done}>Done</button></li>`
      })}
    </ul>
    <p>done</p>
    <ul>
      ${items.filter(function(el, i) {
      return el.status !== 'pending';
      }).map(function (item) {
        return yo`<li id="${item.id}">${item.value}<button onclick=${erase}>Done</button></li>`
      })}
    </ul>
  </div>`
}

function add () {
  // add a new random number to our list 
  var num = uuidv1()

  var todo = {};
    todo.id = uuidv1();
    todo.value = document.getElementById('todoVal').value;
    todo.status = 'pending';
    state = [
      ...state,
      todo
    ];

  
  // construct a new list and efficiently diff+morph it into the one in the DOM 
  var newList = list(state, add)
  yo.update(el, newList)
}
 
function done (ev) {
  // add a new random number to our list 
  var id = ev.target.parentNode.getAttribute('id')
    state.map(function(item) {
      console.log(state)
      if (item.id == id){
        item.status = 'done';
      }
    });

 var newList = list(state, add)
  yo.update(el, newList)
}

function erase (ev) {
  // add a new random number to our list 
  console.log("123")
  var id = ev.target.parentNode.getAttribute('id')
    state = state.filter(function(el, i) {
      return id !== el.id;
    });

 var newList = list(state, add)
  yo.update(el, newList)
}

 
document.body.appendChild(el)