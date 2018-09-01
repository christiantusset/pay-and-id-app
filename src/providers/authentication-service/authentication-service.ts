import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import LoginResponse from '../../app/login-response';
import LoginRequest from '../../app/login-request';
import Configuration from '../../app/configuration';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {
    const storedToken = localStorage.getItem('token');
    if (storedToken !== null) {
      this.token = storedToken;
    } else {
      console.log(' user is not logged in ');
    }
  }


  private loginUrl = Configuration.apiBaseUrl + 'login/';
  private logoutUrl = Configuration.apiBaseUrl + 'login/logout/';
  private passwordRecoveryUrl = Configuration.apiBaseUrl + 'login/password/reset/';

  private token: string;
  private email: string;

  private getAuthenticationHeaders(): HttpHeaders {
    return new HttpHeaders({'authorization': `Bearer ${this.token}`});
  }

  login(email: string, password: string): Promise<boolean> {
    localStorage.setItem('email', email);

    let promise = new Promise<boolean>((resolve, reject) => {
      resolve(true);
    });
    return promise;
    // return this.http.post<LoginResponse>(this.loginUrl, new LoginRequest(email, password))
    //   .toPromise()
    //   .then((loginResponse: LoginResponse) => {
    //     this.token = loginResponse.access_token;
    //     localStorage.setItem('token', this.token);
    //     console.log(this.token);
    //     return true;
    //   })
    //   .catch(() => {
    //     return true;
    //   });
  }

  logout(): Promise<void> {
    return this.http.get<void>(this.logoutUrl, {headers: this.getAuthenticationHeaders()})
      .toPromise()
      .then(() => {
        this.token = undefined;
        localStorage.setItem('token', undefined);
      })
  }

  recoveryPassword(email: string): Promise<void> {
    return this.http.get<void>(this.passwordRecoveryUrl + email)
      .toPromise();
  }
  
  public getToken() {
    if (this.token === undefined) {
      return null;
    }
    return this.token;
  }
  public hasToken(): boolean {
    return this.token !== null;
  }
}
