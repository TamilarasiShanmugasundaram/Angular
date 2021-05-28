import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private userName : string = "";
  private password : string = "";

  // constructor(userName:string, password:string) {
  //   this.userName = userName;
  //   this.password = password;
  //  }

  getUserName() {
    return 'tamil';
  }
  getPassword() {
    return '123';
  }
}
