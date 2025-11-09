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

  //to filter
  //default is all (value in option tag)
  listFilter: string = 'all';

  //first version
  //new array, initially a copy of items
  //visibleItems: wishItem[] = this.items;

  //2nd version as a getter
  //to react any change to the original items array (or objects inside it)
  //this is from js, not in angular
  //this will return an array
  get visibleItems(): wishItem[] {

    let value = this.listFilter;

    if (value === 'all') {
      return this.items;
    } else if (value === 'fulfilled') {
      return this.items.filter(i => i.isDone)
    } else {
      return this.items.filter(i => !i.isDone)
    }
  }
  //with above modification we dont need ngmodelchange method anymore(setFilter)

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

  // this is not needed anymore with the getter version of visibleItems
  //remove in the html also
//  setFilter(value: any) {
//    console.log("Filter set to ", value);
//
//    if (value === 'all') {
//      this.visibleItems = this.items;
//    } else if (value === 'fulfilled') {
//      this.visibleItems = this.items.filter(i => i.isDone)
//    } else {
//      this.visibleItems = this.items.filter(i => !i.isDone)
//    }
//
//  }

  //e here is from event, its optional, just to show lesson
  toggleItem(e: any, wish: wishItem) {
    console.log("clicked ", e);
    wish.isDone = !wish.isDone;
    console.log(wish);
  }




}
