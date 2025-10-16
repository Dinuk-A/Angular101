import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <p>Hello World</p>
    <router-outlet />
  `,
  styles: [`
  p{
    background-color: green;
  }
  `],
})
export class App {
  protected readonly title = signal("Dinuka's Angular App");
}
