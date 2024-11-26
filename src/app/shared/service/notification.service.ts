import { Injectable } from '@angular/core';
import { INotification } from './model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService  implements INotification{
   
  constructor() {
   }
  notfiy(message: string, panelClass: string = ''): void {

  //  this.snackBar.open(message,'' ,{...this.config, panelClass:panelClass});
  }
  notfiySuccess(message: string): void {
    this.notfiy(message, 'success-snackbar');
  }
  notfiyError(message: string): void {
   this.notfiy(message, 'error-snackbar');
  }


}
