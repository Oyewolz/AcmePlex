import { Injectable } from '@angular/core';
import { RestService } from '../../../shared/service/rest.service';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LocalStorageService } from '../../../shared/service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {




  constructor(private restService: RestService, private localStorageService: LocalStorageService) { }



  login(data: any): Observable<any> {
    const url = environment.apiUrl + '/user/sign-in';
    return this.restService.post(url, data);
  }

  register(data: any): Observable<any> {
    const url = environment.apiUrl + '/user';
    return this.restService.post(url, data);
  }


  isUserLoggedIn() {
   return this.localStorageService.get(this.localStorageService.AUTH_TOKEN_KEY) ? true : false;
  }

}
