import { Injectable } from '@angular/core';
import { INotification } from './model';
import { Toast, ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService implements INotification {
   
  constructor(private toastService: ToastService) { }
  
  notfiy(message: string, panelClass: string = ''): void {

    let toast:Toast = { message, classname: panelClass };
    this.toastService.show({ message, classname: panelClass });
  }

  notfiySuccess(message: string): void {
    this.notfiy(message, 'bg-success text-light');
  }

  notfiyError(message: string): void {
    this.notfiy(message, 'bg-danger text-light');
  }
  
}
