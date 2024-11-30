import { Component } from '@angular/core';
import { ToastService } from '../service/toast.service';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
	standalone: true,
	imports: [NgbToastModule, CommonModule],
  template: `
  <ng-container *ngFor="let toast of toastService.toasts;">
    <ngb-toast
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 4000"
      (hidden)="toastService.remove(toast)"
    >
      {{ toast.message }}
    </ngb-toast>
  </ng-container>
`,
	host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' }, })
export class ToastComponent  {


  constructor(public toastService: ToastService) {
     }



}
