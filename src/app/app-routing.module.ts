import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { TicketBookingComponent } from './pages/ticket-booking/ticket-booking.component';
import { SeatSelectionComponent } from './pages/seat-selection/seat-selection.component';
import { TicketPaymentComponent } from './pages/ticket-payment/ticket-payment.component';


const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviePageComponent },
  { path: 'tickets', component: TicketBookingComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'tickets/seat-selection', component: SeatSelectionComponent },
  { path: 'tickets/payment', component: TicketPaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }