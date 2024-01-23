import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  template: `
    <div class="container">
      <h2>Projetos</h2>

      <section>

      </section>
    </div>
  `,
  styles: [
      `
        .container{
          padding:30px 0;
        }
        section{
          background:url('../../../assets/img/undraw_developer_activity_re_39tg.svg') no-repeat;
          background-size: 30%;
          background-position: left center;
          min-height:400px;
        }
      `
  ]
})
export class ProjectComponent {

}
