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
  loading: boolean = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.logout();
  }

  login() {
    this.loading = true;

    let user: User = new User();
    user.username = this.model.username;
    user.password = this.model.password;

    this.authenticationService.login(user)
      .subscribe(
      data => {
        if (HttpStatus.authentication_ok == data.status.code) {          
          localStorage.setItem('currentAuthentication', JSON.stringify(data.entity));
          this.router.navigate([this.returnUrl]);
          this.loading = false;
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
    let authentication: Authentication = JSON.parse(localStorage.getItem('currentAuthentication'));
    if (authentication != null) {
      this.authenticationService.logout(authentication.user);
      localStorage.removeItem('currentAuthentication');
    }
  }
}
