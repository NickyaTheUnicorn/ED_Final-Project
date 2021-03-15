import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {

  loginForm: FormGroup ;

  constructor(private authService: AuthServiceService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ])
  });
  }

  submit(): void{
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(result => {
        if (result) {
          localStorage.setItem('token', result);
          this.router.navigate(['dashboard']);
        } else {
          console.error(result);
        }
      });
    }
  }

  //#region From Validators

  shouldBePasswordRequired(): boolean {
    const password = this.loginForm.controls.password;
    return password.touched && password.hasError('required');
  }

  shouldHavePasswordMinLength(): boolean {
    const password = this.loginForm.controls.password;
    return password.touched && password.hasError('minlength');
  }

  shouldNotHavePasswordMaxLength(): boolean {
    const password = this.loginForm.controls.password;
    return password.touched && password.hasError('maxlength');
  }

  shouldBeEmailRequired(): boolean {
    const email = this.loginForm.controls.email;
    return email.touched && email.hasError('required');
  }

  shouldHaveCorrectEmail(): boolean {
    const email = this.loginForm.controls.email;
    return email.touched && email.hasError('email');
  }

  //#endregion

  ngOnInit(): void { }



}
