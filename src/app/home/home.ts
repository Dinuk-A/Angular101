import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from "../components/counter/counter";

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  msgFromHome =  signal("Hello user from HOME!");

  // for handle key up event
  keyUpHandler(){
    console.log("user clicked")
  }

  keyUpHandlerWithEvent(event: KeyboardEvent){
    console.log(`user clicked the key: ${event.key}`)
  }

}
