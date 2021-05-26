import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardGuard } from '../auth-guard.guard';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  jwtHelper: any;

  ngOnInit(): void {
  }

  constructor(private login:LoginService, private router: Router){ }

  public userName = "";
  public password = "";
  onSubmit(f:NgForm) {
    this.userName = this.login.getUserName();  
    this.password = this.login.getPassword();
    let uname = f.controls['uname'].value;
    let pwd = f.controls['pwd'].value;
    if(uname == this.userName  && pwd== this.password ) {
      //var token = localStorage.getItem('token');
      this.router.navigate(['/home'], { queryParams: { val: uname }});
    } else {
      alert("invalid user");
    }   
  }  
}
