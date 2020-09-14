import {Component, OnInit} from '@angular/core';
import {user} from './app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
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
  public onAddUser( email:string,password:string,address:string,e:Event){
    e.preventDefault()
    let u : user={
      email:email,
      password:password,
      address:address
    };
    this.users.push(u)
  }
}
