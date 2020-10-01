import {Component, OnInit} from '@angular/core';
import {IUser} from './app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
user:IUser={
  name:'foad',
  age:40
}
}
