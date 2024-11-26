import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyTicketsComponent } from './component/ticket/my-tickets.component';
import { TicketPaymentComponent } from './component/ticket-payment/ticket-payment.component';


const routes: Routes = [
  {path: 'book', component: TicketPaymentComponent},
  {path: '', component: MyTicketsComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
