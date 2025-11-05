import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {

  // giving an initial value of 0
  currentVal = signal(0);

  //to increment the value
  increment() {

    //way 1
    //this.currentVal.set(this.currentVal() + 1);

    //way 2 (recommonded)
    //get the current value, add one and return it
    this.currentVal.update((val) => val + 1);
  }

  //to reset the value
  reset() {
    this.currentVal.set(0);
  }

  //to decrement the value
  decrement() {
    this.currentVal.update((val) => val - 1);
  }
}
