import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieDto } from '../../dto';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  
  
  movies: MovieDto[] = [];
  page = 0;
  size = 10;

  @Output() movieSelected = new EventEmitter<any>();

  @Output() loadedMovies = new EventEmitter<any>();
  
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

    this.movieService.getMovies(this.page, this.size).subscribe((resp) => {
      this.movies = resp.data.content;
      this.loadedMovies.emit(this.movies);
      console.log(this.movies, "sending movies ");

    });

  }

  onMovieClick(movie: any): void {
    this.movieSelected.emit(movie);
  }

}
