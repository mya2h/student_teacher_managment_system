import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _loginservice: AuthService, private _router: Router) { }
  canActivate(): boolean {
    if (this._loginservice.loogedIn()) {
      return true;
    } else {
      this._router.navigate(['/'])
      return false;
    }
  }

}
