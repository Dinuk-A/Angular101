import { Component, signal } from '@angular/core';
import { AddItem } from './add-item/add-item';
import { TodoList } from './todo-list/todo-list';

@Component({

  //this app-root is used in index.html to load the app
  selector: 'app-root',
  imports: [AddItem, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');

  //create an empty todo array
  todosList: string[] = [];

  addTodo(todo: string) {
    if (todo) {
      this.todosList.push(todo);
    }
  }

  handleTodoDeleted(index: number) {
    this.todosList.splice(index, 1);
  }
}
