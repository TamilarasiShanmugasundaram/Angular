import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardGuard } from '../auth-guard.guard';
import { AuthServiceService } from '../auth-service.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router: Router, private authService:AuthServiceService){ }
  onSubmit(f:NgForm) {
    let uname = f.controls['uname'].value;
    let pwd = f.controls['pwd'].value;
    this.authService.checkUser(uname,pwd);   
  }  
}
