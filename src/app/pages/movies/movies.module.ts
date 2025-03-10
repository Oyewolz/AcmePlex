import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviePageComponent } from './components/home/movie-page.component';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection.component';
import { SharedModule } from '../../shared/shared.module';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ShowtimeComponent } from './components/showtime/showtime.component';
import { TheatreSelectionComponent } from './components/theatre-selection/theatre-selection.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DurationPipe } from './service/duration.pipe';



@NgModule({
  declarations: [
    MovieCardComponent,
    MovieListComponent,
    MoviePageComponent,
    SeatSelectionComponent,
    ShowtimeComponent,
    TheatreSelectionComponent,
    CarouselComponent,
    DurationPipe
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    FormsModule

  ]
})
export class MoviesModule { }
