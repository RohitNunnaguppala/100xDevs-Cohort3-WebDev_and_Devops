/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor() {
      this.todos = [];
    }
  
    add(todo) {
      this.todos.push(todo);
    }
  
    remove(indexOfTodo) {
      if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
        this.todos.splice(indexOfTodo, 1);
      }
    }
  
    update(index, updatedTodo) {
      if (index >= 0 && index < this.todos.length) {
        this.todos[index] = updatedTodo;
      }
    }
  
    getAll() {
      return this.todos;
    }
  
    get(indexOfTodo) {
      if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
        return this.todos[indexOfTodo];
      }
      return null;
    }
  
    clear() {
      this.todos = [];
    }
  }


const todo = new Todo();

todo.add("Buy groceries");
todo.add("Pay bills");
todo.add("Read book");

console.log(todo.getAll()); 

todo.update(1, "Pay electricity bills");
console.log(todo.get(1)); 

todo.remove(0);
console.log(todo.getAll()); 

console.log(todo.get(0)); 

todo.clear();
console.log(todo.getAll()); 


  
