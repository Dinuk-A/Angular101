import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from './shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

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

   // a new property
   newWishText = '';

  //add a new wish to array
  addNewWish() {

    //'this' refers to the class App
    //'this.items' = the array of wishItem objects
    // 'this.newWishText' = property that holds the text from input box

    //by default the boolean is false
    this.items.push(new wishItem(this.newWishText));

    //clear out the value of property
    this.newWishText = '';
    
  }

  //e here is from event, its optional, just to show lesson
  toggleItem(e: any, wish: wishItem) {
    console.log("clicked ", e);
    wish.isDone = !wish.isDone;
    console.log(wish);
  }




}
