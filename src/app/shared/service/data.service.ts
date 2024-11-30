import { Injectable } from '@angular/core';
import { MovieDto, SeatDto, ShowTimeDto, TheatreDto } from '../../pages/movies/dto';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  data: any;

  constructor(private localStorage: LocalStorageService) { }

  setData(data: any) {
    this.data = data;
    this.localStorage.set('data', JSON.stringify(data));
  }

  getData(): any {
    if (this.data! = null) {
      return this.data;
    }
    const data = this.localStorage.get('data');
    if (data) {
      this.data = JSON.parse(data);
    }
    return this.data;
  }
}
