import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AlertComponent } from './views/alert/alert.component';

import { AuthenticationGuard } from './guards/authentication.guard';

import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

import { LoginAdministrationRouting }  from './login-administration.routing';

@NgModule({
  declarations: [
    AlertComponent,
    LoginComponent,
    RegisterComponent
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
