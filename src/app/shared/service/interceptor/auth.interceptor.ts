import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { LocalStorageService } from '../local-storage.service';
import { NotificationService } from '../notification.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private storageService: LocalStorageService, 
    private notificationService: NotificationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.storageService.get(this.storageService.AUTH_TOKEN_KEY);
    
    if (authToken) {
      console.log('authToken Test', authToken);
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error) => {
        
        console.log('error', error);
        let errorResponse = {
          code: -1,
          message: 'An error occurred',
        }; 
        
        if(error.status === 401 || error.status === 403 || error.status === 0) {
          errorResponse = {
            code: -1,
            message: 'You are not authorized to perform this action. Kindly login and try again',
          };
          this.storageService.remove(this.storageService.AUTH_TOKEN_KEY);
          this.notificationService.notfiyError(errorResponse.message);
        }else if (error.status >= 400 || error.status < 500) {
          errorResponse = {
            code: -1,
            message: error.error.message || 'An error occurred please try again or contact support',
          };
        }

        this.notificationService.notfiyError(errorResponse.message);

        return throwError(error);
      })
    );
  } 
}
