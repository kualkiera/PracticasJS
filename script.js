var todolist = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos:');
    for (var i = 0; i < this.todos.length; i++)
    console.log(this.todos[i].todoText);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
    changeTodo: function(position, newValue) {
      this.todos[position] = newValue;
      this.displayTodos();
    },
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
      this.displayTodos();
    }
};
