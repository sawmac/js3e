function getData() {
  var todoData = { 
    toDo : [],
    completed : []
  }; 
  $('#todo-list').each( function() {
    var task = $(this).find('.task').text();   
    todoData.toDo.push(task);
  });
  $('#completed-list').each( function() {
    var task = $(this).find('.task').text();   
    todoData.completed.push(task);
  });
  return $.param(todoData);
}
