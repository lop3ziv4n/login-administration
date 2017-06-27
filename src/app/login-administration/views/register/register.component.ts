import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';
import { RoleService } from '../../services/role.service';
import { User } from '../../models/user';
import { Role } from '../../models/role';
import { HttpStatus } from '../../utils/http-status';

import { environment } from '../../../../environments/environment';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  model: any = {};
  loading: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private roleService: RoleService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  register() {
    this.loading = true;

    let user: User = new User();
    user.username = this.model.username;
    user.email = this.model.email;
    user.password = this.model.password;
    user.role = [this.getRole()];

    this.userService.create(user)
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

  private getRole(): Role {
    let role: Role = new Role();
    let code = this.router.parseUrl(this.router.url).queryParams["role"];

    if (code == null) {
      code = environment.role_user;
    }

    this.roleService.getRoleByCode(code)
      .subscribe(
      data => role = data
      );

    return role;
  }
}