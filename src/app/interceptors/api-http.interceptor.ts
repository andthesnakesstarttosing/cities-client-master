import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {
  constructor(@Inject('BASE_API_URL') private baseUrl: string) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiReq = req.clone({
      url: `${this.baseUrl}${req.url}`,
      headers: req.headers.set('Content-Type', 'application/json'),
    });
    return next.handle(apiReq);
  }
}
