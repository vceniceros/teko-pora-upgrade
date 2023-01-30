import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  redirectUrl!: string;
  baseUrl: string = 'http://localhost/';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) {}
  public userlogin(user: any, password: any) {
    alert(user);
    return this.httpClient
      .post<any>(
        this.baseUrl +
          '/teko-pora/teko-pora-upgrade/backend/api/rest/src/users/login.php',
        { user, password }
      )
      .pipe(
        map((Users) => {
          this.setToken(Users[0].user);
          this.getLoggedInName.emit(true);
          return Users;
        })
      );
  }

  public userregistration(user: any, password: any) {
    return this.httpClient
      .post<any>(
        this.baseUrl +
          '/teko-pora/teko-pora-upgrade/backend/api/rest/src/users/register.php',
        { user, password }
      )
      .pipe(
        map((Users) => {
          return Users;
        })
      );
  }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true;
    }
    return false;
  }
}
