import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="contact">
      <div class="container">
        <section>
          <h2>Contato</h2>
          <form>
            <input type="email" name="" id="">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </div>
    </div>
    
  `,
  styles: [
    `
      .container{
        padding:30px 0;
       
      }
      .contact{
        background:var(--gray);
      }
      section{
       background:url('../../../assets/img/undraw_work_chat_re_qes4.svg') no-repeat;
        background-size: 45%;
        background-position: right center;}
     
      .container form{
        width:600px;
        display:flex;
        flex-direction:column;
      }
      .container form input, .container form button{
        height:40px;
      }
      .container form textarea{
        margin:10px 0;
      }
      .container form input, .container form textarea, .container form button{
        border-radius:5px;
        background:transparent;
        border:1px solid #FFF;
      }
      .container form button[type="submit"]{
        color:#FFF;
        
      }
      
    `
  ]
})
export class ContactComponent {

}
