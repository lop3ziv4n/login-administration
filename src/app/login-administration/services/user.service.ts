import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { User } from '../models/user';
import { AuthenticationResponse } from '../models/authentication-response'
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {

  private url = environment.rest_webservice_user_api_url;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  create(user: User): Observable<AuthenticationResponse> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    const url = `${this.url}/create`;

    return this.http.post(url, JSON.stringify(user), options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  resetPassword(email: String): Observable<AuthenticationResponse> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let param = `email=${email}`;
    let url = `${this.url}/reset-password`;

    return this.http.put(`${url}?${param}`, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  changePassword(key: String, password: String): Observable<AuthenticationResponse> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = `${this.url}/change-password/`;

    return this.http.put(`${url}/${key}`, JSON.stringify(password), options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  activation(key: String): Observable<AuthenticationResponse> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = `${this.url}/activation/`;

    return this.http.put(`${url}/${key}`, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Internal Error');
  }
}