import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
username:string='';
  password:string='';
public onUsernameInputChanged(e:Event){
  this.username=(<HTMLInputElement>e.target).value;
}
public onPasswordInputChanged(e:Event){
  this.password=(<HTMLInputElement>e.target).value;
}

}

