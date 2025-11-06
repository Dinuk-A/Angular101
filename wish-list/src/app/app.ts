import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from './shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //e here is from event, its optional, just to show lesson
  toggleItem(e:any, wish:wishItem) {
   console.log("clicked ", e);
   wish.isDone = !wish.isDone;
   console.log(wish);
   
   
  }

  // Create an array of wishItem objects
  // first version, without any type
  //items  = [
  //  new wishItem('Learn Angular'),
  //  new wishItem('Drink coffee', true),
  //  new wishItem('Go to mars')
  //]

  //second version
  items: wishItem[] = [
    new wishItem('Learn Angular'),
    new wishItem('Drink coffee', true),
    new wishItem('Go to mars')
  ]

  protected readonly title = signal('wish-list');
}
