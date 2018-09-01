import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import LoginResponse from '../../app/login-response';
import LoginRequest from '../../app/login-request';
import Configuration from '../../app/configuration';
// import { Dashboard } from '../../app/dashboard';


@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) {
   
  }

  private serviceUrl = Configuration.apiBaseUrl + 'dashboard/';

  // getDashboard(): Promise<Dashboard> {
  //   return this.http.get<Dashboard>(this.serviceUrl)
  //     .toPromise();
  // }
 
}
