import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  colorCode:number;

  constructor() {
    this.colorCode=Math.random();
   }

  ngOnInit(): void {

  }
getColor(){
  return this.colorCode > 0.5 ? 'red' :'green';
}



}
