import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
	toasts: Toast[] = [];

	show(toast: Toast) {
		this.toasts.push(toast);
   
	}

	remove(toast: Toast) {
  
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}
export interface Toast {

	classname?: string;
	delay?: number;
  message: string;
}