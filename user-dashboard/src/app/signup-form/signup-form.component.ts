import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
      ]),
      lastName: new FormControl(null, [
        Validators.required,
      ]),
      username: new FormControl(null, [
        Validators.required,
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
      ]),
    });
  }

  shouldBeRequiredFirstName(): boolean {
    const firstName = this.registerForm.controls.firstName;
    return firstName.touched && firstName.hasError('required');
  }

  shouldBeRequiredLastName(): boolean {
    const lastName = this.registerForm.controls.lastName;
    return lastName.touched && lastName.hasError('required');
  }

  shouldBeRequiredEmail(): boolean {
    const email = this.registerForm.controls.email;
    return email.touched && email.hasError('required');
  }

  shouldBeRequiredUsername(): boolean {
    const username = this.registerForm.controls.username;
    return username.touched && username.hasError('required');
  }

  shouldBeRequiredPassword(): boolean {
    const password = this.registerForm.controls.password;
    return password.touched && password.hasError('required');
  }

  shouldBeRquiredConfirmPassword(): boolean {
    const password = this.registerForm.controls.confirmPassword;
    return password.touched && password.hasError('required');
  }

  shouldBeValidEmail(): boolean {
    const email = this.registerForm.controls.email;
    return email.touched && email.hasError('email');
  }

  shouldHaveMinLengthPassword(): boolean {
    const password = this.registerForm.controls.password;
    return password.touched && password.hasError('minlength');
  }

  shouldHaveMaxLengthPassword(): boolean {
    const password = this.registerForm.controls.password;
    return password.touched && password.hasError('maxlength');
  }

  shouldBeMatchPassword(): boolean {
    const password = this.registerForm.controls.password;
    const confirmPassword = this.registerForm.controls.confirmPassword;
    return confirmPassword.touched && password.value !== confirmPassword.value;
  }

  submit(register: any): void {
    console.log(register);
  }

  ngOnInit(): void {
  }

}
