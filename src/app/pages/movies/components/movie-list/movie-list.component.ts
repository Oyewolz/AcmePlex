import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieDto } from '../../dto';
import { MovieService } from '../../service/movie.service';
import { NotificationService } from '../../../../shared/service/notification.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  
  
  movies: MovieDto[] = [];
  page = 0;
  size = 10;
  searchItem : string = '';

  @Output() movieSelected = new EventEmitter<any>();

  @Output() loadedMovies = new EventEmitter<any>();
  
  constructor(private movieService: MovieService, 
    private notification: NotificationService) { }

  ngOnInit(): void {
    this.searchMovies();
  }

  searchMovies(searchItem?: string): void {
    
    this.movieService.getMovies( searchItem, this.page, this.size).subscribe((resp) => {
  
      if (!resp.data.content.length && searchItem) {
        this.notification.notfiyError('No movies found');
        return;
      }

      this.movies = resp.data.content;
      this.loadedMovies.emit(this.movies);
    });

  }

  onMovieClick(movie: any): void {
    this.movieSelected.emit(movie);
  }

}
