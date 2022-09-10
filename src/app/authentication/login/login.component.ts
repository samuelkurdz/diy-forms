import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFormData, themes } from '@core';

@Component({
  selector: 'diy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isFormValid: boolean;
  themesData = themes;
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


  constructor(
    private router: Router
  ) { }

  switchTheme(theme: string): void {
    document.body.setAttribute("data-theme", theme);
  }
  login(loginValues: Record<string, any>): void {
    console.log(loginValues);
    console.log(this.isFormValid);
    if (this.isFormValid) {
      this.router.navigate(['/account']);
    }
    // console.log(this.signUpForm.controls.confirmPassword.errors);
  }
}
