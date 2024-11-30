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
    const url = environment.apiUrl +  'ticket';;
    return this.restService.get(url);
  }


  cancelTicket(id: number): Observable<any> {
    const url = environment.apiUrl +  'ticket/cancel/' + id;
    return this.restService.get(url);
  } 

  getTickets(page: number = 0 , size: number = 20 ): Observable<any> {
    const url = environment.apiUrl +  'ticket/ ' + page + '&size=' + size;
    return this.restService.get(url);
  } 

 

}
