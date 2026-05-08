import { Component } from '@angular/core';
import { Child } from "../child/child";

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {

  //ex 1
  // the value 'Dinuka' is directly passed from html, without using a variable and property binding
  //this only works for strings

  //ex 2
  movieName = "The Matrix";
  movieYear = 1999;
}
