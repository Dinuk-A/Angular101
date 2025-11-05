import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from './shared/models/wishItem';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // Create an array of wishItem objects
  items = [
    new wishItem('Learn Angular'),
    new wishItem('Drink coffee', true),
    new wishItem('Go to mars')
  ]

  protected readonly title = signal('wish-list');
}
