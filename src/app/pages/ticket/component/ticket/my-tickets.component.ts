import { Component, OnInit } from '@angular/core';
import { TicketDetails } from '../../model.dto';
import { TicketService } from '../../service/ticket.service';
import { LocalStorageService } from '../../../../shared/service/local-storage.service';
import { NotificationService } from '../../../../shared/service/notification.service';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss']
})
export class MyTicketsComponent implements OnInit{


  searchTerm: string = '';
  email: string = '';
  tickets: TicketDetails[] = [];


constructor(private ticketService: TicketService, 
  private localStorageService : LocalStorageService, 
private notification:  NotificationService) { }

  ngOnInit(): void {
    
    if (this.localStorageService.get(this.localStorageService.AUTH_TOKEN_KEY)) {
      this.email = this.localStorageService.get(this.localStorageService.USER_EMAIL_KEY);
      this.ticketService.getTickets().subscribe((resp) => {
      this.tickets = resp.data;
      this.tickets.forEach((ticket) => {
        this.updateCancellationStatus(ticket);  
      });
    });
  }


  }
  cancelTicket(ticketId: number,  code: string) {
    if (confirm('Are you sure you want to cancel this ticket?')) {
      this.tickets = this.tickets.filter((ticket) => ticket.id !== ticketId);
      this.ticketService.cancelTicket(code, this.email).subscribe(resp => {
        console.log('Ticket cancelled successfully');
        this.notification.notfiySuccess('Ticket cancelled successfully');

      });
    }
  }

  onKeyDown($event: KeyboardEvent) {
    if ($event.key !== 'Enter' || !this.searchTerm) {
      return;
    }

   
    this.ticketService.getTicketByCode(this.searchTerm).subscribe((resp) => {
    
      const req = resp.data as TicketDetails;
  
      console.log('Ticket: ', req);
      this.updateCancellationStatus(req);
      this.tickets.push(req);

    }); 


  }
  updateCancellationStatus(req: TicketDetails) {
    req.cancelable = req.bookingStatus === 'RESERVED';
  }




}
