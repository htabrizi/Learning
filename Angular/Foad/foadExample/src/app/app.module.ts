import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AdminsComponent } from './admins/admins.component';
import {AppRoutingModule} from './app-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { NotfoundComponent } from './notfound/notfound.component'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    AdminsComponent,
    ClientsComponent,
    NotfoundComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
