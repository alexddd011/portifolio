import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
    <article class="banner container">
      <span></span>
      <span></span>
      <span></span>
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
      article.banner{background: url('assets/img/undraw_launch_day_4e04.svg') no-repeat;background-size: 45%;background-position: right center;}
      section{width:450px;height:300px;display:flex;flex-direction:column;}
      section > h2{text-transform:capitalize;margin-bottom:30px;}
      section > p{}
      span{
        display:block;
        width:3px;
        animation: animaCometa 1s forwards ease-in-out;
        background-image: linear-gradient(transparent, #FFF);
        position:absolute;
        border-radius:50px;
        transform: rotateZ(45deg);
        top:20px;
        z-index:-1;
      }
      span:nth-child(1){
        left:20%;
        height:100px;
        top:6%;
        animation-delay: .25s;
      }
      span:nth-child(2){
        left:20%;
        height:250px;
        top:50%;
        animation-delay: 1s;
      }
      span:nth-child(3){
        height:200px;
        left:60%;
        animation-delay: .75s;
      }

      @keyframes animaCometa{
        0%{
          transform:scale(0) rotateZ(45deg);
        }
        100%{
          transform:scale(1) rotateZ(45deg);
        }
      }
    `
  ]
})
export class BannerComponent {

}
