import{NgModule} from '@angular/core';
import{Routes,RouterModule}from'@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { EdituserComponent } from './edituser/edituser.component';


const routes : Routes= [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'user/:id',component:UserComponent,children:[
    {path:'edit',component:EdituserComponent},
  ]},
  {path:'admins',component:AdminsComponent},
  {path:'clients',component:ClientsComponent},
  {path:'not-found',component:NotfoundComponent},
  {path: '**',redirectTo:'not-found' }

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}


