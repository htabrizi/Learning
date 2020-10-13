import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../interfaces/app-interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
user:IUser;
  constructor(private userService:UserService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
  this.user=this.userService.users.find(user=> user.id===+this.route.parent.snapshot.params['id']);
  if(!this.user){
  this.router.navigate(['/users']);
  }
  }
  onSaveChanges(name:string,email:string){
    this.user.name=name;
    this.user.email=email;
    this.router.navigate(['/users'])
  }

}
