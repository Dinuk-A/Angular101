import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  // ??? 
  imports: [ReactiveFormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
})

//import this in app.ts
export class AddItem {

  // this property needs to be binded in the html
  newTask = new FormControl('');

  //this newToDo event wil be used in app.html.. inside <app-add-item> to send the new task to app.ts
  @Output() newToDo = new EventEmitter<string>();

  submitToDo() {

    // 'this' means class itself
    const task = this.newTask.value?.trim();

    if (task) {
      this.newToDo.emit(task);
      this.newTask.setValue('');
    }
  }

}
