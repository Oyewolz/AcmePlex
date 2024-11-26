import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-selection',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.scss'],
})
export class ShowtimeComponent {
  showtimes: string[] = ['12:10 PM', '2:15 PM', '4:10 PM', '7:00 PM', '9:10 PM', '11:00 PM'];
  selectedShowtime: string | null = null;

  constructor(private router: Router) {}

  selectShowtime(time: string) {
    this.selectedShowtime = time;
  }

  goToSeatSelection() {
    if (this.selectedShowtime) {
      this.router.navigate(['movie/theatre/showtime/seat'], { state: { showtime: this.selectedShowtime } });
    }
  }
}