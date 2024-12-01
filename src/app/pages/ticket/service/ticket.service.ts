import { Injectable } from '@angular/core';
import { RestService } from '../../../shared/service/rest.service';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { TicketReq } from '../model.dto';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
 

  constructor(private restService: RestService) { }


  createTicket(req: TicketReq ):Observable<any> {
    const url = environment.apiUrl +  '/ticket';;
    return this.restService.get(url);
  }


  cancelTicket(code: string, email: string ): Observable<any> {
    //ticket/cancel/52
    const url = environment.apiUrl +  `/ticket/cancel?ticketCode=${code}&email=${email}`;
    return this.restService.get(url);
  } 

  getTickets(page: number = 0 , size: number = 20 ): Observable<any> {
    const url = environment.apiUrl +  '/ticket/ ' + page + '&size=' + size;
    return this.restService.get(url);
  } 

  getTicketByCode(code: string): Observable<any> {
    const url = environment.apiUrl +  '/ticket/code?ticketCode=' + code;
    return this.restService.get(url);
  }

}
