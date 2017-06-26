import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user';
import { Authentication } from '../../models/authentication';
import { HttpStatus } from '../../utils/http-status';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  model: any = {};
  user: User;
  loading = false;
  returnUrl: string;
  authentication: Authentication;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) { }

  ngOnInit() {    
    this.logout();
  }

  login() {
    this.loading = true;

    this.user = new User();
    this.user.username = this.model.username;
    this.user.password = this.model.password;

    this.authenticationService.login(this.user)
      .subscribe(
      data => {
        if (HttpStatus.authentication_ok == data.status.code) {
          this.router.navigate([this.returnUrl]);
          localStorage.setItem('currentAuthentication', JSON.stringify(data.entity));
        } else {
          this.alertService.error(data.status.description);
          this.loading = false;
        }
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

  logout() {
    this.authentication = JSON.parse(localStorage.getItem('currentAuthentication'));
    this.authenticationService.logout(this.authentication.user);
    localStorage.removeItem('currentAuthentication');
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }  
}
