import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';
import { AuthenticationResponse } from '../models/authentication-response'
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {

  private url = environment.rest_webservice_authentication_api_url;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  login(user: User): Observable<AuthenticationResponse> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = `${this.url}/login`;

    return this.http.post(url, JSON.stringify(user), options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  logout(id: number): Observable<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = `${this.url}/logout/`;

    return this.http.put(`${url}/${id}`, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  ttlToken(token: String): Observable<AuthenticationResponse> {
    let url = `${this.url}/ttl_token/`;

    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {    
    console.error(error);
    return Observable.throw(error.json().error || 'Server Internal Error');
  }
}
