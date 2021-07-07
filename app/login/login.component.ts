import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardGuard } from '../auth-guard.guard';
import { AuthServiceService } from '../auth-service.service';
import { LoginService } from '../login.service';
import { map } from "rxjs/operators"; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }
  //loginDetails:object = [];
  constructor(private http : HttpClient,  private router: Router, private authService:AuthServiceService){ }
  onSubmit(f:NgForm) {
    let uname = f.controls['uname'].value;
    let pwd = f.controls['pwd'].value;
    
    this.http.post('http://localhost:8080/login',{userName : uname,password : pwd}).subscribe((response: object) => {
    
    
      let length = Object.keys(response).length;
      if(length > 0 ) {
        this.router.navigate(['/page'], { queryParams: { val: false }});
      } else {
        alert('Invalid user')
       this.router.navigate(['']);      
      }
          });
    //this.authService.checkUser(uname,pwd);  
  }  
}
