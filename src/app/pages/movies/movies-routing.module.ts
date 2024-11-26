
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './components/home/movie-page.component';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection.component';
import { ShowtimeComponent } from './components/showtime/showtime.component';

const routes: Routes = [
   {path: '', component: MoviePageComponent},
   {path: 'theatre/showtime', component: ShowtimeComponent},
   {path: 'theatre/showtime/seat', component: SeatSelectionComponent},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }