import { Injectable } from '@angular/core';
import { TodoModel } from '../model/todo.type';

/*following code means this service will be available and can be 
accessed throughout the application in any component or other service.

if we want this inside only specific module > remove following code and add this service inside the providers array of that module
*/
@Injectable({
  providedIn: 'root'
})

export class TodosService {

  // defining an array of Todo type
  todoItems: Array<TodoModel> = [

    {
      id: 0,
      title: 'Learn Angular',
      completed: false,
      userId: 1
    },
    {
      id: 1,
      title: 'Build an Angular App',
      completed: false,
      userId: 1
    }
    
  ]


}
