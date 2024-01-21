import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
    <article class="banner container">
      <section>
        <h2>alex dos santos silva</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas est corrupti tenetur, illum exercitationem ex eius repudiandae eveniet omnis repellendus, veritatis temporibus totam tempore explicabo autem maxime porro quidem?
        </p>
      </section>
    </article>
  `,
  styles: [
    `
      article{height:calc(100vh - 50px);display:flex;justify-content:start;align-items:center;margin-bottom:20px;}
      section{width:450px;height:300px;display:flex;flex-direction:column;}
      section > h2{text-transform:capitalize;margin-bottom:30px;}
      section > p{}
    `
  ]
})
export class BannerComponent {

}
