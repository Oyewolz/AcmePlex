import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../../../shared/service/rest.service';
import { environment } from '../../../../environments/environment';
import { Card } from '../../../shared/service/model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
 

  constructor(private restService: RestService) { }

  validatePromoCode(discountCode: string):Observable<any> {
    const url = environment.apiUrl +  '/refund/validate?code=' + discountCode;
    return this.restService.get(url);
  }

  getSavedCards(): Observable<any> {
    const url = environment.apiUrl + '/payment/cards';
    return this.restService.get(url);
  }


  makePayment(req: Card): Observable<any> {
    const url = environment.apiUrl + '/payment';

    console.log(req);
    return this.restService.post(url, req);

  }


  refundPayment(): Observable<any> {
    const url = environment.apiUrl + '/refund';
    return this.restService.post(url, {});
  }
}
