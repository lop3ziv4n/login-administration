import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoginAdministrationModule } from './login-administration/login-administration.module';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [    
    BrowserModule,
    FormsModule,    
    HttpModule,
    LoginAdministrationModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
