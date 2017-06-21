import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { ChangePasswordComponent } from './views/change-password/change-password.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'reset', component: ResetPasswordComponent },
        { path: 'change', component: ChangePasswordComponent }
    ])],
    exports: [RouterModule]
})
export class LoginAdministrationRouting { }