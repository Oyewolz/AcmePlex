import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movies/movie-card/movie-card.component';
import { LoginComponent } from './users/login/login.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { TicketBookingComponent } from './pages/ticket-booking/ticket-booking.component';
import { SeatSelectionComponent } from './pages/seat-selection/seat-selection.component';
import { TicketPaymentComponent } from './pages/ticket-payment/ticket-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MovieListComponent,
    MovieCardComponent,
    TicketBookingComponent,
    LoginComponent,
    MoviePageComponent,
    SeatSelectionComponent,
    TicketPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
