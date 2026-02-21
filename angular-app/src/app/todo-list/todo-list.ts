import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  //receive the todo list from app.ts using @Input decorator
  @Input() todos: string[] = [];

  @Output() todoDeleted = new EventEmitter<number>();

  deleteTodo(index: number) {
    this.todoDeleted.emit(index);
  }
}
