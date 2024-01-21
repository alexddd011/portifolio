import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <header class="container">
      <app-navbar/>
    </header>
    
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    
  ]
})
export class AppComponent {
  title = 'port';
}
