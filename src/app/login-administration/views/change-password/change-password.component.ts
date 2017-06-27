import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';

import { HttpStatus } from '../../utils/http-status';

@Component({
  moduleId: module.id,
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  model: any = {};
  loading: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  change() {
    this.loading = true;

    this.userService.changePassword(this.router.parseUrl(this.router.url).queryParams["key"], this.model.password)
      .subscribe(
      data => {
        if (HttpStatus.password_changed == data.status.code) {
          this.alertService.success('Password Changed successful', true);
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
