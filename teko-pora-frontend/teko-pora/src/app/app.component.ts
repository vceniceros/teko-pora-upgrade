import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import * as AOS from 'aos';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Fundación Teko Pora Andresito';
  ngOnInit() {
    AOS.init();
  }
loginbtn:boolean;
logoutbtn:boolean;

constructor(private dataService: UsersService) {
dataService.getLoggedInName.subscribe(user => this.changeName(user));
if(this.dataService.isLoggedIn())
{
console.log("loggedin");
this.loginbtn=false;
this.logoutbtn=true
}
else{
this.loginbtn=true;
this.logoutbtn=false
}

}

private changeName(user: boolean): void {
this.logoutbtn = user;
this.loginbtn = !user;
}
logout()
{
this.dataService.deleteToken();
window.location.href = window.location.href;
}
}
