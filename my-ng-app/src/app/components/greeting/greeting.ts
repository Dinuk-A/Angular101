import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.html',
  styleUrl: './greeting.scss'
})
export class Greeting {

  //saying this component can recieve something from outside
  //should use input.required()
  message = input('Default greetings msg')
}
