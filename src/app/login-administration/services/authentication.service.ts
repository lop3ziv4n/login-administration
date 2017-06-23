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

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  /*
  login(username: string, password: string) {
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
  */
}
