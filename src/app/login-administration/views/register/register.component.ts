import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { HttpStatus } from '../../utils/http-status';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  model: any = {};
  user: User;
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  register() {
    this.loading = true;

    this.user = new User();
    this.user.username = this.model.username;
    this.user.email = this.model.email;
    this.user.password = this.model.password;

    this.userService.create(this.user)
      .subscribe(
      data => {
        if (HttpStatus.user_created == data.status.code) {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
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
}