import { Component } from '@angular/core';

@Component({
  selector: 'app-l03-event-binding',
  imports: [],
  templateUrl: './l03-event-binding.html',
  styleUrl: './l03-event-binding.css',
})
export class EventBindingLesson {

  //1
  count = 0;
  incrementCount() {
    this.count++;
  }

  decrement(){
    this.count--;
  }

  //2
  displayTxt(e: Event) {
    const userInput = (e.target as HTMLInputElement).value;
    const elementToShow = document.getElementById("showTxtHere");
    elementToShow!.textContent = userInput;
  }
}
