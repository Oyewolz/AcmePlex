import { Component, Input, OnInit } from '@angular/core';
import { MovieDto, TheatreDto } from '../../dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theatre-selection',
  templateUrl: './theatre-selection.component.html',
  styleUrls: ['./theatre-selection.component.scss']
})
export class TheatreSelectionComponent {

  @Input() movie: MovieDto = null;

  // List of available theaters
constructor(private router: Router) { }

  theaters: TheatreDto[] = [

    { id: 1, name: 'University District' },
    { id: 2, name: 'Downtown Cinema' },
    { id: 3, name: 'Mall Cineplex' }

  ];

  // Selected theater
  selectedTheater: string | null = null;

  getTicket() {
    if (this.selectedTheater) {
      console.log(`Ticket booked for ${this.movie.movieName} at ${this.selectedTheater}`);
      // Navigate to ticket booking or show a confirmation message
      this.router.navigate(['/movie/theatre/showtime'], { state: { movie: this.movie, theater: this.selectedTheater } });
    }
  }
}
