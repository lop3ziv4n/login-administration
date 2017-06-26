import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';

import { HttpStatus } from '../../utils/http-status';

@Component({
  moduleId: module.id,
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {

  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.activation();
  }

  activation() {
    this.loading = true;

    this.userService.activation(this.router.parseUrl(this.router.url).queryParams["key"])
      .subscribe(
      data => {
        if (HttpStatus.authentication_ok == data.status.code) {
          this.alertService.success('Activation successful', true);
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
