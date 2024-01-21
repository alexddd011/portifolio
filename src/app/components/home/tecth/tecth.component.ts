import { Component } from '@angular/core';

@Component({
  selector: 'app-tecth',
  template: `
    <div class="container">
      <div class="cardIcon" *ngFor="let icon of icons">
        <img src="assets/icon/{{icon}}" alt="">
      </div>
    </div>
  `,
  styles: [
    `
      .container{
        padding:30px 0;
        min-height:150px;
        display:flex;
        justify-content:space-between;
        border-top:1px solid var(--gray);
      }
      .cardIcon{
        width:calc(100% / 6 - 20px);
        display:flex;
        justify-content:center;
        align-items:center;
        padding:50px;
      }
    `
  ]
})
export class TecthComponent {

  icons:string[] = ["angular.svg","aws.svg","database-solid.svg","java.svg","python.svg","jira.svg"]
}
