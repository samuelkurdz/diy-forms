import { Component } from '@angular/core';
import { IFormData } from '@core';

@Component({
  selector: 'diy-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  isFormValid: boolean;
  signUpFormControls: IFormData = {
    formName: "signup",
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
      {
        name: "confirmPassword",
        label: "Confirm Password",
        value: "",
        type: "password",
        validators: {
          "required": true,
          "minLength": 8,
        }
      },
      {
        name: "gender",
        label: "Gender",
        placeholder: 'Select your gender',
        type: "select-menu",
        options: [
          {
            label: "Male",
            value: "male"
          },
          {
            label: "Female",
            value: "female"
          }
        ],
        validators: {
          "required": true,
        }
      },
    ],
    formValidators: {
      passwordMatch: true,
    }
  };


  constructor() { }

  signUp(signUpValues: Record<string, any>): void {
    console.log(signUpValues);
    console.log(this.isFormValid);
  }
}
