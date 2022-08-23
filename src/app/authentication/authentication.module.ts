import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthContainerComponent } from './auth-container/auth-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from '../components/text-input/text-input.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    TextInputComponent
  ]
})
export class AuthenticationModule { }
