import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieDto } from '../../dto';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: MovieDto[] = [
    { title: 'Blade Runner 2049', image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',genre:'Action',rating:4.5 , length: "2.5"},
    
    { title: 'Naruto: Shippuden', image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',genre:'Action',rating:4.5 , length: "2.5" },
    { title: 'Naruto: Shippuden', image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',genre:'Action',rating:4.5 , length: "2.5" },
    
    { title: 'Naruto: Shippuden', image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',genre:'Action',rating:4.5 , length: "2.5" },
    
    { title: 'Naruto: Shippuden', image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',genre:'Action',rating:4.5 , length: "2.5" },
    { title: 'Naruto: Shippuden', image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',genre:'Action',rating:4.5 , length: "2.5" },
    
    { title: 'Naruto: Shippuden', image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',genre:'Action',rating:4.5 , length: "2.5" },
    
    { title: 'Naruto: Shippuden', image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',genre:'Action',rating:4.5 , length: "2.5" },
    
    { title: 'Naruto: Shippuden', image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',genre:'Action',rating:4.5 , length: "2.5" },
    
    { title: 'Naruto: Shippuden', image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',genre:'Action',rating:4.5 , length: "2.5" },
    
    { title: 'Naruto: Shippuden', image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',genre:'Action',rating:4.5 , length: "2.5" },
    
    { title: 'Naruto: Shippuden', image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',genre:'Action',rating:4.5 , length: "2.5" },
    { title: 'Naruto: Shippuden', image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',genre:'Action',rating:4.5 , length: "2.5" },
    { title: 'Naruto: Shippuden', image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',genre:'Action',rating:4.5 , length: "2.5" },
    
    // Add other movies here
  ];

  @Output() movieSelected = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onMovieClick(movie: any): void {
    this.movieSelected.emit(movie);
  }

}
