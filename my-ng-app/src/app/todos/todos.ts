import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoModel } from '../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})

export class Todos implements OnInit {

  // INJECT THE TODO SERVICE
  // DEPENDANCY INJECTION, CREATING AN INSTANCE
  todo_service = inject(TodosService);

  // displaying items using signals
  //initially an empty array
  //type is  array of todo models
  todoItemsSignal = signal<Array<TodoModel>>([])
  todoItemsFromNetSignal = signal<Array<TodoModel>>([])

  //function 1
  loadManualTodos(): void {
    console.log(this.todo_service.todoItemsManual);
    this.todoItemsSignal.set(this.todo_service.todoItemsManual);
  }

  //function 2
  loadTodosFromNet(): void {
    this.todo_service.getToDosFromNet()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todosFromNet) => {
        this.todoItemsFromNetSignal.set(todosFromNet)
      })
  }


  // this is a lifecycle hook 
  // this allows to have a function which runs when the component is initiated
  // === rendered, only 1st time, not rerendered
  ngOnInit(): void {

    //for load manual todos 
    this.loadManualTodos();

    //for load todos from API 
    this.loadTodosFromNet();

  }

}
