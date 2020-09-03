import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
isCorrect:boolean=false;

isModified:boolean=false;
isCancelled:boolean=true;

users:string[]=['foad','hamid','milad','jafar'];
usersObj :any =[

  {
    id:1,
    name:'foad'
  },
  {
    id:2,
    name:'foad'
  },
  {
    id:3,
    name:'foad'
  },
  {
    id:4,
    name:'foad'
  },
  {
    id:5,
    name:'foad'
  },
  {
    id:6,
    name:'foad'
  },
];

styles ={};
classes={};




  ngOnInit(): void {
  this.styles={
    'font-size':this.isCorrect ? '1rem':'8rem',
    'color':'red'
      };

      this.classes={
    'big-font-size':this.isModified,
        'cancelled-color':this.isCancelled
      }
  }
  public  addNewUser(){
    this.usersObj = [

      {
        id:1,
        name:'foad'
      },
      {
        id:2,
        name:'foad'
      },
      {
        id:3,
        name:'foad'
      },
      {
        id:4,
        name:'foad'
      },
      {
        id:5,
        name:'foad'
      },
      {
        id:6,
        name:'foad'
      },
      {
        id:7,
        name:'foad'
      },
    ];
  }
}

