
$(document).ready(function(){
    $.getJSON('/api/todos')
    .then(addTodos)

    $('#todoInput').keypress(function(event){
      if(event.which === 13) {
        createTodo();
      }
    });
});

function addTodos(todos) {
  // add todos to the page here
  todos.forEach(function(todo){
    addTodo(todo);
  });
}

function addTodo(todo){
  var newTodo = $('<li class="task">' + todo.name + todo.completed + '</li>');
  if(todo.completed){
    newTodo.addClass("done");
  }
  $('.list').append(newTodo);
}

function createTodo() {
  // send request to create new todo
  var usrInput = $('#todoInput').val();
  $.post('/api/todos', {name: usrInput})
  .then(function(newTodo){
    addTodo(newTodo);
  })
  .catch(function(err){
    console.log(err);
  })
}
