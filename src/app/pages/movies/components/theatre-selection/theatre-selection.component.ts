import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MovieDto, TheatreDto } from '../../dto';
import { Router } from '@angular/router';
import { MovieService } from '../../service/movie.service';
import { NotificationService } from '../../../../shared/service/notification.service';
import { interval } from 'rxjs';
import { DataService } from '../../../../shared/service/data.service';

@Component({
  selector: 'app-theatre-selection',
  templateUrl: './theatre-selection.component.html',
  styleUrls: ['./theatre-selection.component.scss']
})
export class TheatreSelectionComponent implements OnChanges {

  @Input() movie: MovieDto = null;
  size: number = 100;
  page: number = 0;

  // List of available theaters
  constructor(private router: Router, private movieService: MovieService,
    private notificationService: NotificationService, private dataService: DataService 
  ) { }

  theatres: TheatreDto[] = [];

  // Selected theater
  selectedTheatre: number = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['movie'] && this.movie) {
      this.fetchTheaters();
    }
  }

  fetchTheaters() {

    this.movieService.getTheaters(this.movie.id, this.size,  this.page).subscribe(resp => {
      if (!resp.data) {
        this.notificationService.notfiyError('No theaters found for this movie');

        interval(1000).subscribe(() => {
          this.movie = null;
        });
        return;
      }

      this.theatres = resp.data;

    });

  }

  getTicket() {
    if (this.selectedTheatre) {

      console.log('Selected Theatre: ', this.selectedTheatre);
      const value = this.theatres.find(item => this.selectedTheatre == item.id);

      console.log('Selected Theatre: ', value);
      this.dataService.setData( { movie: this.movie, theatre:  value} );

      this.router.navigate(['/movie/theatre/showtime']);
    }
  }
}
