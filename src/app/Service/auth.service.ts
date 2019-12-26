import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../Model/user';
import { login } from '../Model/authenticate';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signUP = 'api/user';
  logIN = 'api/login'
  constructor(private http: HttpClient,private router:Router) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  registerUser(member: user) {
    return this.http.post(this.signUP, member, this.httpOptions)
  }
  login(log: login) {
    return this.http
      .post(this.logIN, log, this.httpOptions)
  }
  getRole() {
    return localStorage.getItem('role');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  loogedIn() {
    return !!localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/'])
  }


}
