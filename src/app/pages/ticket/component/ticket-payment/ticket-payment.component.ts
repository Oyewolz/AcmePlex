import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../../shared/service/data.service';
import { NotificationService } from '../../../../shared/service/notification.service';
import { MovieDto, SeatDto, ShowTimeDto, TheatreDto } from '../../../movies/dto';
import { PaymentService } from '../../service/payment.service';
import { PaymentComponent } from '../../../../shared/payment/payment.component';
import { TicketService } from '../../service/ticket.service';
import { TicketReq } from '../../model.dto';
import { interval } from 'rxjs';

@Component({
  selector: 'app-ticket-payment',
  templateUrl: './ticket-payment.component.html',
  styleUrls: ['./ticket-payment.component.scss']
})
export class TicketPaymentComponent implements OnInit {




  movie: MovieDto;
  showtime: ShowTimeDto;
  theatre: TheatreDto;
  chosenSeats: SeatDto[] = [];
  seatList: string; 
  discountCode: string = '';
  validatedPromoCode: boolean = false;
  promoCodeDiscount: number = 0;
 balance: number = 0;


  @ViewChild(PaymentComponent) paymentComponent: PaymentComponent;

  
  constructor(private router: Router, 
    private dataService: DataService, 
    private notification: NotificationService, 
    private ticektService: TicketService,
   private payment: PaymentService) { }

  ngOnInit(): void {

    const data = this.dataService.getData();
    console.log('Data: ', data);
    if (!data) {
      this.router.navigate(['/']);
    }

    this.movie = data['movie'];
    this.showtime = data['showtime'];
    this.theatre = data['theatre'];
    this.chosenSeats = data['seats'];


    if(!this.movie || !this.showtime || !this.theatre || !this.chosenSeats) {
      this.notification.notfiyError('Something went wrong, please try again');
      this.router.navigate(['/movie']);
    }
    this.seatList = this.chosenSeats.map(seat => seat.seat).join(', ');
    this.getBalance();

  }

  proceedToPayment() {
    
    this.paymentComponent.openModel('TICKET', this.movie.moviePrice * this.chosenSeats.length );

  }

  validatePromoCode() {
    
    if(!this.discountCode){
      this.notification.notfiyError('Please enter a discount code');
      return; 
    }

    this.payment.validatePromoCode(this.discountCode).subscribe(resp => {
      if(!resp.data) {
        this.notification.notfiyError('Invalid promo code');
        return;
      }
      this.promoCodeDiscount = resp.data.balance;
      this.getBalance();

      this.validatedPromoCode = true; 
      this.notification.notfiySuccess('Promo code applied successfully');

    }

    );
  }

  handlePayment($event: any) {

    console.log('Payment event: ', $event);

    const ticket:TicketReq  = {
      theatreId: this.theatre.id,
      showtimeId: this.showtime.id,
      seatIds: this.chosenSeats.map(seat => seat.id),
      refundCode: this.discountCode,
      email: $event.email,
      price: this.balance,
      paymentReference: $event.paymentReference
    
    }

    this.ticektService.createTicket(ticket)  
    .subscribe(resp => {
      this.notification.notfiySuccess('Ticket booked successfully');

      interval(5000).subscribe(() => {
      this.notification.notfiySuccess('Ticket code: ' + resp.data.code);
      this.router.navigate(['/']);
      });
      
    });
  }
  
getBalance() {
  const balance = (this.movie.moviePrice * this.chosenSeats.length) - this.promoCodeDiscount; 
  this.balance =   balance ? balance : 0;
}

}
