import { Component } from '@angular/core';

@Component({
  selector: 'app-l04-templatesyntaxes',
  imports: [],
  templateUrl: './l04-templatesyntaxes.html',
  styleUrl: './l04-templatesyntaxes.css',
})
export class TemplatesyntaxesLesson {

  // for if else
  isServerOn = false;
  dayNumber = 7;

  //for for loops
  users = [
    {id: 1, name: "Ann", age: 25},
    {id: 2, name: "Ben", age: 15},
    {id: 3, name: "Cal", age: 35},
  ]

  // fruits = ['Apple', 'Banana', 'Cherry']
  fruits = []
}
