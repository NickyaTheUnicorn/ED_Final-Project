import { baseUri } from './../environments/environment';
import { Injectable } from '@angular/core';
import { fromEventPattern, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  fetchData(): Observable<any> {
    return this.httpClient.get(`${baseUri}/users`);
  }
}
