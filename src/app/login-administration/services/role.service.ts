import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Role } from '../models/role';
import { environment } from '../../../environments/environment';

@Injectable()
export class RoleService {

  private url = environment.rest_webservice_role_api_url;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getRoleByCode(code: String): Observable<Role> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = `${this.url}/code/`;

    return this.http.get(`${url}/${code}`, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Internal Error');
  }
}
