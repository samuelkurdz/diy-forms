import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthContainerComponent } from './auth-container/auth-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from '../components/text-input/text-input.component';
import { IformComponent } from '../components/iform/iform.component';
import { DropdownComponent } from '../components/dropdown/dropdown.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    FormInputComponent,
    IformComponent,
    DropdownComponent
  ]
})
export class AuthenticationModule { }
