import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <p>
        <strong>DevHome</strong> - todos os direitos reservados&copy; - {{ano}}
      </p>
    </footer>
  `,
  styles: [
    `
      footer{
        padding:30px 0;
        text-align:center;
      }
    `
  ]
})
export class FooterComponent {
  ano:any = new Date().getFullYear()
}
