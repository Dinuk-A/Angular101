import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoModel } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit {

  // INJECT THE TODO SERVICE
  todo_service = inject(TodosService);

  // displaying items using signals
  //initially an empty array
  todoItemsSignal = signal<Array<TodoModel>>([])

  // this is a lifecycle hook 
  // this allows to have a function which runs when the component is initiated
  // === rendered, only 1st time, not rerendered
  ngOnInit(): void {
    console.log(this.todo_service.todoItems);
    this.todoItemsSignal.set(this.todo_service.todoItems);

  }

}
