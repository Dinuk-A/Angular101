import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationLesson } from './lessons/l-01-interpolation/l-01-interpolation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InterpolationLesson],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice-app');
}
