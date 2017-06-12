import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
    ])],
    exports: [RouterModule]
})
export class LoginAdministrationRouting { }