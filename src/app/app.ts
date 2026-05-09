import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationLesson } from './lessons/l-01-interpolation/l-01-interpolation';
import { PropertyBindingLesson } from './lessons/l02-property-binding/l02-property-binding';
import { EventBindingLesson } from './lessons/l03-event-binding/l03-event-binding'; 
import { TemplatesyntaxesLesson } from './lessons/l04-templatesyntaxes/l04-templatesyntaxes';
import { Parent } from './lessons/l05-input-output/parent/parent';
import { Child } from './lessons/l05-input-output/child/child';
import { DIfferExmDisplayElement } from './lessons/l06-differ/display-element/display-element';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InterpolationLesson,PropertyBindingLesson, EventBindingLesson, TemplatesyntaxesLesson, Parent,Child, DIfferExmDisplayElement],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice-app');
}
