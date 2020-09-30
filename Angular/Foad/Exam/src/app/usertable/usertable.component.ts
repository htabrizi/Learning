import {Component, Input, OnInit} from '@angular/core';
import {user} from '../app-interface';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})

export class UsertableComponent implements OnInit {

  @Input() users:user[]=[]

  constructor() { }
  onUpdate(user){
    event.confirm.resolve();
   }
  ngOnInit(): void {

  }

}
