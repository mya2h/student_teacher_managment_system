import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Service/auth.service';
import { ValidUser } from '../../../Model/valid'
import { user } from '../../../Model/user';
import { FormBuilder, FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { login } from '../../../Model/authenticate'
import { Token } from '@angular/compiler/src/ml_parser/lexer';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  public ownerForm: FormGroup;
  constructor(private login: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }
  public authenticateUser = (ownerFormValue) => {
    if (this.ownerForm.valid) {
      const user: login = {
        email: ownerFormValue.email,
        password: ownerFormValue.password,
      }
      console.log(user)
      this.login.login(user).subscribe(data => {
        console.log(data)
        const value = data as ValidUser
        this.router.navigate(['/home'])
        localStorage.setItem('token', value.token);
        localStorage.setItem('role', value.role);
      }, (err => {
        this._snackBar.open("Unauthorized please register", "", {
          duration: 2000,
        });
      })
      );
    }
  }


}
