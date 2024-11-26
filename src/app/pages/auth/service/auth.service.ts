import { Injectable } from '@angular/core';
import { RestService } from '../../../shared/service/rest.service';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private restService: RestService) { }



  login(data: any): Observable<any> {
    const url = environment.apiUrl + '/user/sign-in';
    return this.restService.post(url, data);
  }

  register(data: any): Observable<any> {
    const url = environment.apiUrl + '/user';
    return this.restService.post(url, data);
  }



}
