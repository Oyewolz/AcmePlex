import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketRoutingModule } from './ticket-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TicketBookingComponent } from './component/ticket-booking/ticket-booking.component';
import { MyTicketsComponent } from './component/ticket/my-tickets.component';
import { TicketPaymentComponent } from './component/ticket-payment/ticket-payment.component';



@NgModule({
  declarations: [TicketBookingComponent, MyTicketsComponent, TicketPaymentComponent ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    SharedModule
  ]
})
export class TicketModule { }
