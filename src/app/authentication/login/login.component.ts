import { Component, OnInit } from '@angular/core';
import { IFormData } from '@core';

@Component({
  selector: 'diy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isFormValid: boolean;
  loginFormControls: IFormData = {
    controls: [
      {
        name: "email",
        label: "Email",
        value: "",
        type: "email",
        validators: {
          "required": true,
          "email": true,
        }
      },
      {
        name: "password",
        label: "Password",
        value: "",
        type: "password",
        validators: {
          "required": true,
          "minLength": 8,
        }
      },
    ],
  };


  constructor( ) { }

  login(loginValues: Record<string, any>): void {
    console.log(loginValues);
    console.log(this.isFormValid);
    // console.log(this.signUpForm.controls.confirmPassword.errors);
  }
}
