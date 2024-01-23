import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecth',
  template: `
    <div class="container">
      <div class="widthSlide">
        <div class="arrow_left">
          <img src="assets/icon/angle-left-solid.svg" alt="" (click)="slideArrowScroll('left')">
        </div>
        <div class="arrow_right">
          <img src="assets/icon/angle-right-solid.svg" alt="" (click)="slideArrowScroll('right')">
        </div>
        <section class="slideMain" [ngStyle]="{'width': widthSlide, 'margin-left':slideWidth}">
          <div class="cardIcon" *ngFor="let icon of icons">
            <img src="assets/icon/{{icon.img}}" alt="">
            
          </div>
        </section>
        
      </div>
      
    </div>
  `,
  styles: [
    `
      .container{border-top:1px solid var(--gray);}
      .widthSlide{width:100%;height:220px;position:relative;transition: 1s ease-in-out;overflow:hidden;}

      section{transition:.25s;}
      .arrow_left, .arrow_right{position:absolute;z-index:1;width:40px;height:100%;display:flex;justify-content:center;align-items:center;top:0;cursor:pointer;opacity:.1;transition: .25s ease-in-out;}
      .arrow_left:hover, .arrow_right:hover{opacity:.7;}
      .arrow_left{left:0;}
      .arrow_right{right:0;}

      .slideMain{
        height:220px;
        display:flex;
      }
      .cardIcon{
        width:200px;
        height:220px;
        margin:0 15px;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:20px;
        position:relative;
      }
      .cardIcon img{
        width:100px;
      }
      
     
    `
  ]
})
export class TecthComponent implements OnInit{
  
 
  icons:any[] = [
    {
      title:"Angular",
      img:"angular.svg"
    },
    {
      title:"Angular",
      img:"aws.svg"
    },
    {
      title:"Angular",
      img:"database-solid.svg"
    },
    {
      title:"Angular",
      img:"java.svg"
    },
    {
      title:"Angular",
      img:"python.svg"
    },
    {
      title:"Angular",
      img:"jira.svg"
    }]
  qntCard:number = 200 * this.icons.length
  widthSlide:string = this.qntCard + "px"
  
  slideWidthNumber:number = 0
  slideWidth:string = ""
  
  ngOnInit(): void {
    
      
    }
  slideArrowScroll(value:string){
    
     this.slideWidth = "-" + this.slideWidthNumber + "px"
  }
}
