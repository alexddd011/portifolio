import { Component } from '@angular/core';
import { Menu } from 'src/app/interface/menu';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="menu__bar">
      <a routerLink="./">
        <h1>Dev<strong>Home</strong></h1>
      </a>

      <div class="list__menu__bar">
        <button (click)="setMenuToggle()">
          <img src="assets/icon/bars-solid.svg" alt="">
        </button>

        <ul class="menu__bar_ul" [ngClass]="{'menu_toggle': menuToggle}">
          <li *ngFor="let menu of listMenu">
            <a routerLink="">{{menu.title}}</a>
          </li>
        </ul> 
      </div>
      
    </nav>
    
  `,
  styles:[
    `
      nav.menu__bar{height:50px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--gray);}
      nav.menu__bar  > a > h1 > strong{color:var(--rosa);}
      nav.menu__bar > h1{display:inline;}

      nav.menu__bar > .list__menu__bar{position:relative;display:flex;justify-content:center;align-items:end;flex-direction:column;}

      nav.menu__bar > .list__menu__bar > button{width:30px;height:30px;background:transparent;cursor:pointer;display:none;}

      nav.menu__bar > .list__menu__bar > ul.menu__bar_ul{display: flex;}
      nav.menu__bar > .list__menu__bar > ul.menu__bar_ul > li > a{display:block;position:relative;padding:0 10px;font-weight:600;text-transform:uppercase;}
      nav.menu__bar > .list__menu__bar > ul.menu__bar_ul > li > a:hover{color:var(--rosa);}
      nav.menu__bar > .list__menu__bar > ul.menu__bar_ul > li > a:hover::after{content:'';position:absolute;height: 2px;width: 100%;bottom:-5px;left:50%;transform: translateX(-50%);background-color: currentColor;animation: animationMenu .25s forwards ease-in-out;}
      @keyframes animationMenu{0%{width: 0;}100%{width: 100%;}}

      @media screen and (max-width: 420px) {
        nav.menu__bar > .list__menu__bar > button{display:block;}

        nav.menu__bar > .list__menu__bar > ul.menu__bar_ul{display: none;background:var(--gray);border-radius:5px;border:1px solid #FFFFFF20;}
        nav.menu__bar > .list__menu__bar > ul.menu__bar_ul.menu_toggle{display:block;position:absolute;top:calc(100% + 5px);}
        nav.menu__bar > .list__menu__bar > ul.menu__bar_ul.menu_toggle > li{border-bottom:1px solid #FFFFFF20;}
        nav.menu__bar > .list__menu__bar > ul.menu__bar_ul.menu_toggle > li:last-child{border-bottom:none;}
        nav.menu__bar > .list__menu__bar > ul.menu__bar_ul > li > a{padding:8px 15px;}
        nav.menu__bar > .list__menu__bar > ul.menu__bar_ul > li > a:hover::after{content:'';position:absolute;height: 0;width: 0%;bottom:0px;left:0%;transform: translateX(0%);background-color: currentColor;}
      }
    `
  ]
})
export class NavbarComponent {

  listMenu:Menu[]=[
    {
      title:"Inicio",
      link:""
    },
    {
      title:"Sobre",
      link:""
    },
    {
      title:"Projetos",
      link:""
    }
  ]

  menuToggle:boolean = false

  setMenuToggle(){
    this.menuToggle = this.menuToggle ? false:true

  }

}
