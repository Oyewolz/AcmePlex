import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: { title: string; image: string; description?: string };

  // Optional: Add any additional methods or logic if needed
  handleMovieClick() {
    console.log(`Movie clicked: ${this.movie.title}`);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
