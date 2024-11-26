import { Component, OnInit } from '@angular/core';
import { MovieDto } from '../../dto';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {


   selectedMovie: MovieDto | null = null;
  constructor() { }

  ngOnInit(): void {
  }
  handleMovieSelected($event: any) {

    this.selectedMovie = $event;
}

}
