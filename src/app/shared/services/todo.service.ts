import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  /*todos:Todo[]=[];
  newTodo={} as Todo;*/
  private storageKey="todos";
  constructor() { }
getTodos(): Todo[]
{
  const todos=localStorage.getItem(this.storageKey);
  return todos ? JSON.parse(todos) : [];
}
addTodo(todo:Todo)
{
  const todos=this.getTodos();
  todos.push(todo);
  localStorage.setItem(this.storageKey,JSON.stringify(todos));
}
delteTodo(index:number)
{
  const todos=this.getTodos();
  todos.splice(index,1);
  localStorage.setItem(this.storageKey,JSON.stringify(todos));
}
updateTodo(index: number, updatedTodo: Todo) {
  const todos = this.getTodos();
  if (index >= 0 && index < todos.length) {
    todos[index] = updatedTodo;
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }
}

}
