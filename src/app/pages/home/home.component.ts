import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-banner/>
    <app-tecth/>
    <app-about/>
    <app-project/>
    <app-contact/>
  `,
  styles: [
  ]
})
export class HomeComponent {

}
