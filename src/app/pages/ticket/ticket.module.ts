import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketRoutingModule } from './ticket-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MyTicketsComponent } from './component/ticket/my-tickets.component';
import { TicketPaymentComponent } from './component/ticket-payment/ticket-payment.component';
import { PaymentService } from './service/payment.service';

@NgModule({
  declarations: [ MyTicketsComponent, TicketPaymentComponent ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    SharedModule
  ], 
  providers: [PaymentService]
})
export class TicketModule { }
