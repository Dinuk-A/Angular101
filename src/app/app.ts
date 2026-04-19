import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationLesson } from './lessons/l-01-interpolation/l-01-interpolation';
import { PropertyBindingLesson } from './lessons/l02-property-binding/l02-property-binding';
import { EventBindingLesson } from './lessons/l03-event-binding/l03-event-binding'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InterpolationLesson,PropertyBindingLesson, EventBindingLesson],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice-app');
}
