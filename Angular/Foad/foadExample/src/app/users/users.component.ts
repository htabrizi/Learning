import { Component, OnInit } from '@angular/core';
import{ IUser} from '../interfaces/app-interfaces'
import{UserService} from '../user.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:IUser[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {


    this.users=this.userService.users;
  }

}
