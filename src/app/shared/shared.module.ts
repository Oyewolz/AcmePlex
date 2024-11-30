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
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { DataService } from './service/data.service';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, PaymentComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ], 
  exports: [FooterComponent, HeaderComponent, ReactiveFormsModule],
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
