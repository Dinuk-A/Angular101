import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  //example for data binding way 1
  //this is a function that will be called in header.html
  // this way is recommonded
  title = signal('My first Angular app')

  //example for data binding way 2 (traditional way)
  //without using signal
  sec_title = "2nd title"
}
