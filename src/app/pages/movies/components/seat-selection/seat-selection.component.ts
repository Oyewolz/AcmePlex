import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.scss']
})
export class SeatSelectionComponent implements OnInit {

  seats = [
    { number: 'A1', status: 'available' },
    { number: 'A2', status: 'occupied' },
    { number: 'A3', status: 'available' },
    { number: 'A4', status: 'occupied' },
    { number: 'A5', status: 'available' },
    { number: 'A6', status: 'available' },
    { number: 'A7', status: 'chosen' },
    { number: 'A8', status: 'available' },
    { number: 'A9', status: 'occupied' },
    { number: 'A10', status: 'available' },
    { number: 'B1', status: 'available' },
    { number: 'B2', status: 'occupied' },
    { number: 'B3', status: 'available' },
    { number: 'B4', status: 'occupied' },
    { number: 'B5', status: 'available' },
    { number: 'B6', status: 'available' },
    { number: 'B7', status: 'chosen' },
    { number: 'B8', status: 'available' },
    { number: 'B9', status: 'occupied' },
    { number: 'B10', status: 'available' },
    // Repeat for rows B, C, D, etc.
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
   
  }    

  chosenSeats: string[] = [];

  selectSeat(seat: { number: string; status: string }) {
    if (seat.status === 'occupied') return;

    if (seat.status === 'chosen') {
      seat.status = 'available';
      this.chosenSeats = this.chosenSeats.filter((s) => s !== seat.number);
    } else {
      seat.status = 'chosen';
      this.chosenSeats.push(seat.number);
    }
  }

  buyTicket() {
    
    this.router.navigate(['ticket/book']);
  }
}
