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
            <div class="content">
              <h4>{{icon.title}}</h4>
              <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora rem quibusdam beatae fugit molestiae voluptas
              </p>
            </div>
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
        overflow:hidden;
        border-radius:5px;
      }
      .cardIcon img{
        width:100px;
      }
      .cardIcon:hover .content{
        transform: translateY(-100%);
      }
      .content{
        position:absolute;
        width:100%;
        height:calc(100% - 10px);
        top:100%;
        left:0;
        background:#00000069;
        padding:20px 10px;
        transition: .25s ease-in-out;
        border-radius:5px;
      }
      .content h4{
        margin-bottom:15px;
      }
      .content p{
        font-size:12px;
        padding:0 5px;
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
      title:"AWS",
      img:"aws.svg"
    },
    {
      title:"Banco de dados",
      img:"database-solid.svg"
    },
    {
      title:"Java",
      img:"java.svg"
    },
    {
      title:"Python",
      img:"python.svg"
    },
    {
      title:"Jira",
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
