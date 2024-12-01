import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieDto } from '../../dto';
import { DataService } from '../../../../shared/service/data.service';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {



  selectedMovie: MovieDto | null = null;
  movies: MovieDto[] = [];
  movieName: string = null;

  @ViewChild('movieList') movieListComponent!: MovieListComponent;



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

  handleSearch($event: KeyboardEvent) {

    console.log('Search: ', this.movieName);
    if ($event.key !== 'Enter' || !this.movieName) {
      console.log('Invalid search');
      return;
    }

    this.movieListComponent.searchMovies(this.movieName);
  }

}
