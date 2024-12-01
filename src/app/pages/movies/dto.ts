export class MovieDto {
    id: number = 0;
    movieName: string = '';
    movieImageUrl: string = '';
  movieRating: number = 0;
  movieGenre: string = '';
  movieReleaseDate: string = '';
  moviePrice: number = 0;
  movieDescription: string = '';
  movieDuration: number = 0;
  movieTrailer: string = '';

} 
export class TheatreDto {
    id: number = 0;
    name: string = '';
    location: string = '';
}

export class ShowTimeDto{
    id: number = 0;
    startTime: string = '';
    movie: MovieDto; 
    theatre: TheatreDto;
    
}

export class SeatDto {
    id: number = 0;
    seatNumber: string = '';
    seat: string = '';
    seatRow: string = '';
    seatTaken: boolean = false;
    selected: boolean = false;
}