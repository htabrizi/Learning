import {Component, OnInit} from '@angular/core';
import {user} from './app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
users:user[]=[];
  public userAdded(users:user[]){
this.users=users;
}
}
