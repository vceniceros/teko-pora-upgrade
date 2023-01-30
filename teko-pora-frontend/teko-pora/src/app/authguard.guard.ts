import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Injectable({
providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
constructor(private dataService: UsersService,private router: Router ) {}
canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot): boolean {
const routeurl: string = state.url;
return this.isLogin(routeurl);
}

isLogin(routeurl: string): true | any {
if (this.dataService.isLoggedIn()) {
return true;
}

this.dataService.redirectUrl = routeurl;
this.router.navigate(['/admintk'], {queryParams: { returnUrl: routeurl }} );
}
}
