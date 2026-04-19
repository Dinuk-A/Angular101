import { Component } from '@angular/core';

@Component({
  selector: 'app-l-01-interpolation',
  imports: [],
  templateUrl: './l-01-interpolation.html',
  styleUrl: './l-01-interpolation.css',
  standalone: true
})
export class InterpolationLesson {

  //display plain values
  name = "Dinuka";
  age = 25;

  //display expressions
  maxAge = 25 + 35;
  isAdult = true;

  //display method results
  greet() {
    return 'Hello ' + this.name;
  }

  //display object values
  user = {
    name: "Dinuka",
    age: 25
  }

  //display array values
  colors = ["red", "blue", "green"];

  //we cannot show if , for loop kinda expressions using this

}
