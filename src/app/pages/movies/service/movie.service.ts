import { Injectable } from '@angular/core';
import { RestService } from '../../../shared/service/rest.service';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private restService: RestService) { }


  getMovies(): Observable<any> {
    const url = environment.apiUrl + '/movies';
    return this.restService.get(url);
  }


  getMovieById(id: number): any {
    const url = environment.apiUrl + `/movies/${id}`;
    return this.restService.get(url);
  }

  //TODO Shouldn't be paginated 
  getTheatreByMovieId(id:number ): any {
    const url = environment.apiUrl + `/theatre/fetch?movieId=${id}`;
    return this.restService.get(url);
  }


  getShowTimesByMovieIdAndTheatreId(id: number, theatreId: number): any {
    //TODO show time should not be pagenated 
    const url = environment.apiUrl + `/theatre/show-times?movieId=${id}&theatreId=${theatreId}`;
    return this.restService.get(url);
  }


  

}
