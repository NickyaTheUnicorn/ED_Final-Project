import { baseUri } from '../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`${baseUri}/signin`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${baseUri}/signup`, data);
  }

  isLoggedIn(): boolean {
    return (localStorage.getItem(`token`)) ? true : false;
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
