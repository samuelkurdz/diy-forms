import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthContainerComponent } from './auth-container/auth-container.component';
import { ButtonComponent, IformComponent } from '@components';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthContainerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthenticationRoutingModule,
    IformComponent,
    ButtonComponent
  ]
})
export class AuthenticationModule { }
