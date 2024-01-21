import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="about">
      <div class="container">
        <h2>Sobre</h2>

        <p>Quer entender a diferença entre hard skills e soft skills? Então veio ao lugar certo. Nesta matéria, você vai entender os dois conceitos e como eles se aplicam na rotina profissional. Acompanhe!</p>

        <p>Os termos hard skills e soft skills tornaram-se bastante comuns no mercado de trabalho e são conceitos bastante importantes para definir as habilidades essenciais no momento de contratar e também de desenvolver um novo colaborador. Envolvem tanto competências e conhecimentos técnicos comprovados e as habilidades sociais e emocionais de um profissional.</p>

        <p>Para facilitar sua jornada nesse universo, veja os tópicos que serão explorados nesta matéria:</p>
      </div>

    </section>
  `,
  styles: [
    `
      section.about{
        background:var(--gray);
        min-height:200px;
        width:100%;
      }
      section.about > .container{
        padding:30px 0;
      }
      section.about > .container > h2{
        margin-bottom:30px;
      }
      section.about > .container > p{
        margin-bottom:15px;
      }
    `
  ]
})
export class AboutComponent {

}
