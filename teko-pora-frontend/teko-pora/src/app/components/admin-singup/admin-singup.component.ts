import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-admin-singup',
  templateUrl: './admin-singup.component.html',
  styleUrls: ['./admin-singup.component.css']
})
export class AdminSingupComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: UsersService,private router:Router) {
  this.angForm = this.fb.group({
  password: ['', Validators.required],
  user: ['', Validators.required],
  });
  }

  ngOnInit() {
  }

  postdata(angForm1: { value: { user: any;  password: any; }; })
  {
  this.dataService.userregistration(angForm1.value.user,angForm1.value.password)
  .pipe(first())
  .subscribe(
  data => {
  this.router.navigate(['login']);
  },

  error => {
  });
  }

  get password() { return this.angForm.get('password'); }
  get user() { return this.angForm.get('user'); }

}
