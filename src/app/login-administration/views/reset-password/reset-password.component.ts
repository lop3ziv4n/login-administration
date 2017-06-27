import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';

import { HttpStatus } from '../../utils/http-status';

@Component({
  moduleId: module.id,
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  model: any = {};
  loading: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  reset() {
    this.loading = true;

    this.userService.resetPassword(this.model.email)
      .subscribe(
      data => {
        if (HttpStatus.reset_password_notification == data.status.code) {
          this.alertService.success('Reset password notification', true);
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
