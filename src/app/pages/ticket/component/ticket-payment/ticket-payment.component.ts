import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../../shared/service/data.service';
import { NotificationService } from '../../../../shared/service/notification.service';
import { MovieDto, SeatDto, ShowTimeDto, TheatreDto } from '../../../movies/dto';
import { PaymentService } from '../../service/payment.service';
import { PaymentComponent } from '../../../../shared/payment/payment.component';

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

  @ViewChild(PaymentComponent) paymentComponent: PaymentComponent;

  
  constructor(private router: Router, 
    private dataService: DataService, 
    private notification: NotificationService, 
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

  }

  proceedToPayment() {
    
    this.paymentComponent.openModel('TICKET');

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
      this.promoCodeDiscount = resp.data.discount;

      this.validatedPromoCode = true; 
      this.notification.notfiySuccess('Promo code applied successfully');

    }

    );
  }

}
