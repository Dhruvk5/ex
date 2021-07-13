// ---------------------------------------
// Model
// ---------------------------------------
"use strict";
class Todo {
    static nextId = 0;
    constructor(title) {
      Todo.nextId++;
      this.id = Todo.nextId;
      this.title = title;
      this.completed = false;
    }
  }
  
  // ---------------------------------------
  // Service
  // ---------------------------------------
  
  const todo = [];

  class TodoService {
    addTodo(title) {
      todo.push(new Todo(title));
    }
    editTodo(id, newTitle) {
      todo[id-1].title=newTitle;
    }
    completeTodo(id) {
      todo[id-1].completed=true;
    }
    completeAll() {

    }
    deleteTodo(id) {
      todo.splice(id-1,1);
    }
    clearCompleted() { }
    viewTodos(flag){
      if( flag === "ALL"){
        this.todos.forEach((todo)=>{
          console.log(todo);
        });
      }
     }
  }
  
  // ---------------------------------------
  
  const todoService = new TodoService();
  
  
  todoService.addTodo("item-1");
  todoService.addTodo("item-2");
  todoService.editTodo(2, "item-two");
  todoService.deleteTodo(2);
  todoService.viewTodos("ALL");

  console.log(todo);