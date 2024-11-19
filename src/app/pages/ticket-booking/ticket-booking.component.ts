import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.scss']
})
export class TicketBookingComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewSeats() {
    this.router.navigate(['tickets/seat-selection']);
  }

}
