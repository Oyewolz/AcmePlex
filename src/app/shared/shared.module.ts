import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { RestService } from './service/rest.service';
import { NotificationService } from './service/notification.service';
import { LocalStorageService } from './service/local-storage.service';
import { AuthInterceptor } from './service/interceptor/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
  ], 
  exports: [FooterComponent, HeaderComponent],
  providers: [
    RestService, 
    NotificationService, 
    LocalStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ]
})
export class SharedModule { }
