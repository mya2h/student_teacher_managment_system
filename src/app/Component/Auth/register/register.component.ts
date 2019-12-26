import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Service/auth.service'
import { user } from '../../../Model/user'
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  durationInSeconds = 3;
  public registerForm: FormGroup;
  selected = 'startup';
  doesntmuch = false
  errorMessage: string;
  forbiddenEmails: any;
  successMessage: string;
  constructor(private signupService: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      confirmPassword: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required])
    })
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }
  public createOwner = (ownerFormValue) => {
    if (this.registerForm.valid) {
      if (ownerFormValue.confirmPassword != ownerFormValue.password) {
        this.doesntmuch = true
      }
      else {
        const user: user = {
          first_name: ownerFormValue.firstName,
          last_name: ownerFormValue.lastName,
          phone_number: ownerFormValue.phone,
          email: ownerFormValue.email,
          password: ownerFormValue.password,
          role: ownerFormValue.role
        }
        this.signupService.registerUser(user).subscribe(data => {
          console.log(data);
          this.registerForm.reset();
          this._snackBar.open("Successfully registerd", "", {
            duration: 2000,
          });
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 3000);
        }, err => {
          this._snackBar.open("user not registered", "", {
            duration: 2000,
          });
        });
      }
    }
  }
}  
