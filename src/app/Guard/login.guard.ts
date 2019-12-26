import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { AuthService } from '../Service/auth.service'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _loginservice:AuthService,private _router:Router){}
  canActivate():boolean{
    if(this._loginservice.loogedIn()){
      this._router.navigate(['/home'])
      return false
    } else{
      return true
    }
  }  
}

