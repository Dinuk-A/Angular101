import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  //ex 1
  username = input<string>();

  //ex 2
  movie = input.required<string>();  //parent must send the movie name, if not angular throws an error 
  year = input<number>(1922);   //if parent does not send the year, it will be defaulted to 1922

  varWithDefaultValue = input<string>('default value'); //if parent does not send a value, it will be defaulted to 'default value'
}
