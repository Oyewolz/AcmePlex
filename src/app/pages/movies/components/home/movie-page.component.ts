import { Component, OnInit } from '@angular/core';
import { MovieDto } from '../../dto';
import { DataService } from '../../../../shared/service/data.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {


  selectedMovie: MovieDto | null = null;
  movies : MovieDto[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.setData(null);
  }
  handleMovieSelected($event: any) {

    this.selectedMovie = $event;
}

handleLoadedMovies($event: any) {
  this.movies = $event;
  }
  
}
