import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AdduserComponent } from './adduser/adduser.component';
import { UsertableComponent } from './usertable/usertable.component';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    UsertableComponent


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
