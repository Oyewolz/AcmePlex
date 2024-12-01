import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../../shared/service/notification.service';
import { MovieService } from '../../service/movie.service';
import { MovieDto, ShowTimeDto } from '../../dto';
import { DataService } from '../../../../shared/service/data.service';

@Component({
  selector: 'app-ticket-selection',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.scss'],
})
export class ShowtimeComponent implements OnInit {
  page: number = 0;
  size: number = 100;
  showtimes: ShowTimeDto[] = [];
  selectedShowtime: ShowTimeDto; 
  movie: MovieDto;
  theatreId: number;
  currentDate: Date = new Date();

  constructor(private router: Router,private route: ActivatedRoute,
     private notificationService: NotificationService, 
     private dataService: DataService, 
     private movieService: MovieService ) {
     }

  ngOnInit(): void {
  
    const data  = this.dataService.getData();

    if (data) {
      console.log("navigation -= what identified 2 ", data);
      this.movie = data['movie'];
      this.theatreId = data['theatre'];
      this.fetchShowtimes();
      
    }else{
      this.notificationService.notfiyError('Something went wrong, please try again');
      this.router.navigate(['/']);
    }
   
  }

  fetchShowtimes() {
    this.movieService.getShowTimesByMovieIdAndTheatreId(this.movie.id, this.theatreId, this.page, this.size)
    .subscribe((resp) => {
      if (!resp.data) {
        this.notificationService.notfiyError('No showtimes found for this movie');
        return;
      }
      this.showtimes = resp.data;
    } ); 
  }



  selectShowtime(showTime: ShowTimeDto) {
    this.selectedShowtime = showTime;
  }

  goToSeatSelection() {
    if (this.selectedShowtime) {
      this.dataService.setData({ movie: this.movie, showtime: this.selectedShowtime, theatre: this.theatreId });
      this.router.navigate(['movie/theatre/showtime/seat']);
    }
  }
}