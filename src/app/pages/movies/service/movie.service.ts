import { Injectable } from '@angular/core';
import { RestService } from '../../../shared/service/rest.service';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private restService: RestService) { }


  getMovies(searchTerm: string , page: number , size: number =10): Observable<any> {
    
    let url = environment.apiUrl + `/movie/fetch?&page=${page}&size=${size}`;
    if(searchTerm ){
      url = url + `&name=${searchTerm}`;
    }
    return this.restService.get(url);
  }


  getMovieById(id: number): any {
    const url = environment.apiUrl + `/movie/${id}`;
    return this.restService.get(url);
  }

  //TODO Shouldn't be paginated 
  getTheatreByMovieId(id:number ): any {
    const url = environment.apiUrl + `/theatre/fetch?movieId=${id}`;
    return this.restService.get(url);
  }


  getShowTimesByMovieIdAndTheatreId(id: number, theatreId: number, page:number = 0 , size: number = 100): Observable<any> {
    //TODO show time should not be pagenated 
    const url = environment.apiUrl + `/theatre/show-times?movieId=${id}&theatreId=${theatreId}`;
    return this.restService.get(url);
  }

  getTheaters(id: number, size: number, page: number): Observable<any> {
    const url = environment.apiUrl + `/theatre/fetch?movieId=${id}&size=${size}&page=${page}`;
    return this.restService.get(url);
  }
 
  getSeatsByShowTimeId(id: number, theatreId : number , size: number = 10000, page: number = 0 ): Observable<any> {
    const url = environment.apiUrl + `/theatre-seat/seat-distribution?showtimeId=${id}&size=${size}&page=${page}&theatreId=${theatreId}`;
    return this.restService.get(url);
  }
  
  

}
