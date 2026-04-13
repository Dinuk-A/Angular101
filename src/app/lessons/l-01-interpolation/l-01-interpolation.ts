import { Component } from '@angular/core';

@Component({
  selector: 'app-l-01-interpolation',
  imports: [],
  templateUrl: './l-01-interpolation.html',
  styleUrl: './l-01-interpolation.css',
  standalone: true
})
export class InterpolationLesson {

  name = "Dinuka";
  age = 25;

  greet() {
    return 'Hello ' + this.name;
  }

}
