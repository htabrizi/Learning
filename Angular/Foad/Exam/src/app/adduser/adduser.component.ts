import {Component, OnInit, Output} from '@angular/core';
import {user} from '../app-interface';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  users: user [] = [
    {
      email: 'a@a.com',
      password:'123',
      address:'123main'
    },
    {
      email: 'b@b.com',
      password:'456',
      address:'456main'
    },
    {
      email: 'c@c.com',
      password:'789',
      address:'789main'
    }
  ];


 @Output() onAddUserClicked = new EventEmitter < user[]>();

  constructor() { }

  ngOnInit(): void {
  }
  public onAddUser( email:string,password:string,address:string,e:Event){
    e.preventDefault();
    let u : user={
      email:email,
      password:password,
      address:address
    };
    this.users.push(u);
    this.onAddUserClicked.emit(this.users);
  }
}
