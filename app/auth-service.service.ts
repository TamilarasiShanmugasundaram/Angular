import { invalid } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  isAuthenticate : boolean = false;
  public userName = "";
  public password = "";

  constructor(private router: Router,private login:LoginService) { }
  
  checkUser( uname:string,  password:string) {
    this.userName = this.login.getUserName();  
    this.password = this.login.getPassword();
    if(uname == this.userName  && password == this.password ) {
      this.isAuthenticate = true;
      // this.router.navigate(['/home'], { queryParams: { val: uname }});
      this.router.navigate(['/page'], { queryParams: { val: false }});
    } else {
      alert("Invalid user");
      this.router.navigate(['']);      
    }   
  }

}
