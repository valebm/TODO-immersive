
//TODO APP
import EventEmitter from 'events'

// we create an instance of EventEmitter to emit and
// listen to events
const bus = new EventEmitter
var yo = require('yo-yo')
const uuidv1 = require('uuid/v1');


// we call the reducer function, imported above, and send it
// the bus and state created here as arguments

var state = [];
var el = list(state, add)
reducer()

function list (items, onclick) {

  var input = yo`<input type="text" id="todoVal">`
  console.table(items)
  return yo`<div>
    Todo Classic
    ${input}
    <button id="addTodoButt" onclick=${onclick}>Add</button>
    <p>TODO</p>
    <ul>
     ${items.filter(function(el, i) {
      return el.status !== 'done';
      }).map(function (item) {
        return yo`<li id="${item.id}">${item.value}<button onclick=${done}>Done</button></li>`
      })}
    </ul>
    <p>DONE</p>
    <ul>
      ${items.filter(function(el, i) {
      return el.status !== 'pending';
      }).map(function (item) {
        return yo`<li id="${item.id}">${item.value}<button onclick=${erase}>Done</button></li>`
      })}
    </ul>
  </div>`
}

// to make your code
function add() {
  bus.emit('add')
}

// to make your code
function done(ev) {
  bus.emit('done', ev)
}

// to make your code
function erase(ev) {
  bus.emit('erase', ev)
}


function reducer() {

 bus.on('add', function() {
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
    var newList = list(state, add)
    yo.update(el, newList)
  })

  bus.on('done', function(ev) {
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
  })

    bus.on('erase', function(ev) {
    var id = ev.target.parentNode.getAttribute('id')
    console.log(id)
    state = state.filter(function(el, i) {
      return id !== el.id;
    });


    var newList = list(state, add)
    yo.update(el, newList)
  })


}
 
document.body.appendChild(el)
