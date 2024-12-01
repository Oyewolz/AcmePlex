import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../service/movie.service';
import { MovieDto, SeatDto, ShowTimeDto, TheatreDto } from '../../dto';
import { NotificationService } from '../../../../shared/service/notification.service';
import { DataService } from '../../../../shared/service/data.service';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.scss']
})
export class SeatSelectionComponent  implements OnInit {

  movie: MovieDto;
  showtime: ShowTimeDto;
  theatre: TheatreDto;
  seats: SeatDto[] = [];
  chosenSeats: SeatDto[] = [];
  seatRows: { [key: string]: SeatDto[] } = {};

  constructor(private router: Router,
    private movieService: MovieService, private notification: NotificationService, 
    private dataService: DataService
  ) {
  }
  
  ngOnInit(): void {

    const data = this.dataService.getData();
    console.log('Data: ', data);
    if (data) {
      this.movie = data['movie'];
      this.showtime = data['showtime'];
      this.theatre = data['theatre'];


      if(!this.movie || !this.showtime || !this.theatre) {
        this.notification.notfiyError('Something went wrong, please try again');
        this.router.navigate(['/movie']);
      }

      this.fetchSeatInformation();
    }
  }




  fetchSeatInformation() {


    this.movieService.getSeatsByShowTimeId(this.showtime.id , this.theatre.id)
      .subscribe((resp) => {

        if (!resp.data) {
          return;
        }

        this.seats = resp.data;
        const allSeatsTaken = this.seats.every(seat => seat.seatTaken);

        if (allSeatsTaken) {
          this.notification.notfiyError('All seats have been taken');
        }

        this.seatRows = this.seats.reduce((acc, seat) => {
          if (!acc[seat.seatRow]) {
            acc[seat.seatRow] = [];
          }
          acc[seat.seatRow].push(seat);
          return acc;
        }, {} as { [key: string]: SeatDto[] });

      }
      );
  }



  selectSeat(seat: SeatDto) {
    if (seat.seatTaken) {
      this.notification.notfiyError('Seat has already been taken');
      return;
    }

    if (seat.selected) {
      seat.selected = false;
      const index = this.chosenSeats.findIndex(s => s.id === seat.id);
      this.chosenSeats.splice(index, 1);
      return;
    }

    seat.selected = true;

    this.chosenSeats.push(seat);
  }


  buyTicket() {

    if (this.chosenSeats.length === 0) {
      this.notification.notfiyError('Please select a seat to continue');
      return;
    }
   

    if ((this.chosenSeats.length / this.seats.length) > 0.1) {
      this.notification.notfiyError('You can only book 10% of the seats');
      return
    }

    this.dataService.setData({ movie: this.movie, showtime: this.showtime, theatre: this.theatre, seats: this.chosenSeats });

    this.router.navigate(['ticket/book']);
  }

}
