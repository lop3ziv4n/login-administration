import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AlertComponent } from './views/alert/alert.component';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { ChangePasswordComponent } from './views/change-password/change-password.component';

import { AuthenticationGuard } from './guards/authentication.guard';


import { EqualValidatorDirective } from './directive/equal-validator.directive';

import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

import { LoginAdministrationRouting } from './login-administration.routing';

@NgModule({
  declarations: [
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    EqualValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginAdministrationRouting
  ],
  providers: [
    AuthenticationGuard,
    AlertService,
    AuthenticationService,
    UserService
  ],
  exports: [
    AlertComponent
  ]
})
export class LoginAdministrationModule { }
