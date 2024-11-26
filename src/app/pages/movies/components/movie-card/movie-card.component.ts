import { Component, Input, OnInit } from '@angular/core';
import { MovieDto } from '../../dto';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: MovieDto;

  // Optional: Add any additional methods or logic if needed
  handleMovieClick() {
    
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
