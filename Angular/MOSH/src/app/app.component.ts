import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  contactMethods=[
    {id:1, name:'Email'},
    {id:2, name:'phone'}
  ];


  log(x){
  console.log(x);}

submit(f){
  console.log(f);
 }
}
