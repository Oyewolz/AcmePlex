import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './service/interceptor/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { NumericOnlyDirective } from './service/numeric-only.directive';
import { ToastComponent } from './toast/toast.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, PaymentComponent, NumericOnlyDirective,],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbToastModule,
    ToastComponent
  ], 
  exports: [FooterComponent, HeaderComponent, ReactiveFormsModule, FormsModule,
     PaymentComponent, NumericOnlyDirective, NgbToastModule, ToastComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }, 
  ]
})
export class SharedModule { }
