import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-payment',
  templateUrl: './ticket-payment.component.html',
  styleUrls: ['./ticket-payment.component.scss']
})
export class TicketPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  proceedToPayment() {
    console.log('Proceeding to payment...');
    // Redirect to payment gateway or confirmation page
  }
}
