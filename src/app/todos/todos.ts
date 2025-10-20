import { Component, inject, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit {

  // INJECT THE TODO SERVICE
  todo_service = inject(TodosService);

  // this is a lifecycle hook 
  // this allows to have a function which runs when the component is initiated
  // === rendered, only 1st time, not rerendered
  ngOnInit(): void {
    console.log(this.todo_service.todoItems);
    
  }

}
