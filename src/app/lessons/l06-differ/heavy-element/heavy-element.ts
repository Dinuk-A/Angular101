import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-element',
  imports: [],
  templateUrl: './heavy-element.html',
  styleUrl: './heavy-element.css',
})
export class HeavyElement {

  //create a fake dataset
  numbers = Array.from({length:5000},(_,i)=>i);
}
