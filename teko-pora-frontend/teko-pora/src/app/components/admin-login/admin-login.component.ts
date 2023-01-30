import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers: [UsersService]
})
export class AdminLoginComponent {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: UsersService,private router:Router) {
  this.angForm = this.fb.group({
  user: ['', [Validators.required,Validators.minLength(1), Validators.email]],
  password: ['', Validators.required]
  });
  }

  ngOnInit() {
  }
  postdata(angForm1: { value: { user: any; password: any; }; })
  {
  this.dataService.userlogin(angForm1.value.user,angForm1.value.password)
  .pipe(first())
  .subscribe(
  data => {
  const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dc7161be3dbf2250c8954e560cc35060dashboard';
  this.router.navigate([redirect]);
  },
  error => {
  alert("User name or password is incorrect")
  });
  }
  get user() { return this.angForm.get('user'); }
  get password() { return this.angForm.get('password'); }
  }
