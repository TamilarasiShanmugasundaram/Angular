import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getUserName() {
    return 'tamil';
  }
  getPassword() {
    return '123';
  }
}
