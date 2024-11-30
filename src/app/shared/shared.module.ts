import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { RestService } from './service/rest.service';
import { NotificationService } from './service/notification.service';
import { LocalStorageService } from './service/local-storage.service';
import { AuthInterceptor } from './service/interceptor/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { DataService } from './service/data.service';
import { NumericOnlyDirective } from './service/numeric-only.directive';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, PaymentComponent, NumericOnlyDirective],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ], 
  exports: [FooterComponent, HeaderComponent, ReactiveFormsModule, FormsModule, PaymentComponent, NumericOnlyDirective],
  providers: [
    RestService, 
    NotificationService, 
    LocalStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }, 
    DataService
  ]
})
export class SharedModule { }
