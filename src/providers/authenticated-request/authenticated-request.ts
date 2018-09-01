import { Injectable } from '@angular/core';
import {AuthenticationService} from '../authentication-service/authentication-service';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticatedRequest {

  constructor(private authenticationService: AuthenticationService, private http: HttpClient) { }

  getAuthenticationHeaders(): HttpHeaders {
    return new HttpHeaders({'authorization': `Bearer ${this.authenticationService.getToken()}`});
  }
  handleAuthError(error) {
    if (error.status === 403) {
      this.authenticationService.logout();
    }
    throw error;
  }
  public get<T>(url: string, params: any = {}): Observable<HttpResponse<T>> {
    if (!this.authenticationService.hasToken()) {
      this.authenticationService.logout();
    }
    const observable = this.http.get<T>(url, {headers: this.getAuthenticationHeaders(),
      observe: 'response', params: params});
    observable.subscribe(values => {
      },
      this.handleAuthError);
    return observable;
  }
  public post<T>(url: string, data?: any): Observable<HttpResponse<T>> {
    if (!this.authenticationService.hasToken()) {
      this.authenticationService.logout();
    }
    const observable = this.http.post<T>(url, data, {headers: this.getAuthenticationHeaders(),
      observe: 'response'});
    observable.subscribe(values => {
      },this.handleAuthError);
    return observable;
  }
  public put<T>(url: string, params: any = {}): Observable<HttpResponse<T>> {
    if (!this.authenticationService.hasToken()) {
      this.authenticationService.logout();
    }
    const observable = this.http.put<T>(url, params, {headers: this.getAuthenticationHeaders(),
      observe: 'response' });
    observable.subscribe(values => {
      }, this.handleAuthError);
    return observable;
  }
  public delete<T>(url: string): Observable<HttpResponse<T>> {
    if (!this.authenticationService.hasToken()) {
      this.authenticationService.logout();
    }
    const observable = this.http.delete<T>(url, {
      headers: this.getAuthenticationHeaders(),
      observe: 'response'
    });
    observable.subscribe(values => {
      }, this.handleAuthError);
    return observable;
  }

}
