import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {

  loginForm: FormGroup ;

  constructor() {
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

  submit(login: any): void{
    console.log(login);
  }

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

  ngOnInit(): void { }



}
