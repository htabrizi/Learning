import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AdminsComponent } from './admins/admins.component';
import {AppRoutingModule} from './app-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { EdituserComponent } from './edituser/edituser.component'
import { UserService } from './user.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    AdminsComponent,
    ClientsComponent,
    NotfoundComponent,
    UserComponent,
    EdituserComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
   ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
