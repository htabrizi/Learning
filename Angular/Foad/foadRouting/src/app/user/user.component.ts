import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import { IUser } from '../interfaces/app-interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
user:IUser;
constructor(private route:ActivatedRoute,private userService:UserService,private router:Router){}

ngOnInit():void{
this.user=this.userService.users.find(user=>user.id===+this.route.snapshot.params['id']);
console.log(this.user);
if(!this.user){
this.router.navigate(['/users'])
}
}

goToEditUser(){
this.router.navigate(['/user',this.user.id,'edit']);
}
}





// selectedId:number;
// selectedUser:IUser;
// isUserFound:boolean=true;


//   constructor(private route:ActivatedRoute) { }

//   ngOnInit(): void {

// let id = this.route.snapshot.paramMap.get('id');
// console.log(id);


// this.route.paramMap.subscribe(params=>{
// let id=+params.get('id');
// console.log(id);

// })

//     this.selectedId=+this.route.snapshot.params['id'];
//     this.selectedUser=this.users.find(user=>user.id===this.selectedId);
//     if (!this.selectedUser) {
//       this.isUserFound=false;

//     }
// this.route.params.subscribe((params:Params)=>{
//   this.selectedUser=this.users.find(user=>user.id===+params['id']);

// })

