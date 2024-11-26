import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-payment',
  templateUrl: './ticket-payment.component.html',
  styleUrls: ['./ticket-payment.component.scss']
})
export class TicketPaymentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  proceedToPayment() {
    console.log('Proceeding to payment...');
    // Redirect to payment gateway or confirmation page
    this.router.navigate(['tickets/my-ticket']);
  }
}
