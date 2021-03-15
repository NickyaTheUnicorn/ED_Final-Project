import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInspectorServiceService {

  constructor() { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenizedReq;
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
      tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      return next.handle(tokenizedReq);
    } else {
      return next.handle(req);
    }
  }
}
