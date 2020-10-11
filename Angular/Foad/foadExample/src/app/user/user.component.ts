import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { observable } from 'rxjs';
import { IUser } from '../interfaces/app-interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
selectedId:number;
selectedUser:IUser;
isUserFound:boolean=true;
  users:IUser[]=[
  {
    id:1,
    name:'foad'
  },
  {
    id:2,
    name:'shadmehr'
  },
  {
    id:3,
    name:'siavash'
  }
];


  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
let id = this.route.snapshot.paramMap.get('id');
console.log(id);


this.route.paramMap.subscribe(params=>{
let id=+params.get('id');
console.log(id);

})

//     this.selectedId=+this.route.snapshot.params['id'];
//     this.selectedUser=this.users.find(user=>user.id===this.selectedId);
//     if (!this.selectedUser) {
//       this.isUserFound=false;

//     }
// this.route.params.subscribe((params:Params)=>{
//   this.selectedUser=this.users.find(user=>user.id===+params['id']);

// })

  }

}
