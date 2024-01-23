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

    <footer class="container">
      <app-footer/>
    </footer>
  `,
  styles: [
    
  ]
})
export class AppComponent {
  title = 'port';
}
