import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  //======= INPUT ========
  //ex 1
  username = input<string>();

  //ex 2
  movie = input.required<string>();  //parent must send the movie name, if not angular throws an error 
  year = input<number>(1922);   //if parent does not send the year, it will be defaulted to 1922

  varWithDefaultValue = input<string>('default value'); //if parent does not send a value, it will be defaulted to 'default value'


  //======= OUTPUT ========
  //ex 1
  msgEvent = output<string>();

  sendMsg() {
    this.msgEvent.emit("Hello from child");
  }

  //ex 2
  count = 0;

  countChanged = output<number>();

  increaseCount() {
    this.count++;
    this.countChanged.emit(this.count);
  }
}
