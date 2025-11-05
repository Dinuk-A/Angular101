import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Home } from './home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',

  //home related elements commented for router lesson
  //imports: [RouterOutlet, Home, Header],
  imports: [RouterOutlet, Header],
  template: `
    <app-header />
    <main>
     <!--<app-home />-->
     <router-outlet/>
    </main>
   
  `,
  styles: [`

    main {
    padding: 16px
  }

  `],
})
export class App {
  protected readonly title = signal("Dinuka's Angular App");
}
