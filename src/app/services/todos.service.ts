import { inject, Injectable } from '@angular/core';
import { TodoModel } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

/*following code means this service will be available and can be 
accessed throughout the application in any component or other service.

if we want this inside only specific module > remove following code and add this service inside the providers array of that module
*/
@Injectable({
  providedIn: 'root'
})

export class TodosService {

  //before doing that we need to add the provideHttpClient in app.config.ts Providers array
  //to get access to http services (get,post,put...etc)
  http = inject(HttpClient)
  
  //for manual todos (ang service ex 1)
  // defining an array of Todo type
  todoItemsManual: Array<TodoModel> = [

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

  //for todos from net (for http request ex)
  getToDosFromNet(){
    const url = 'https://jsonplaceholder.typicode.com/todos'
    return this.http.get<Array<TodoModel>>(url);
  }


}
