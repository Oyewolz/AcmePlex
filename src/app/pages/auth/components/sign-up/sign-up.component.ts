import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../shared/service/notification.service';
import { PaymentComponent } from '../../../../shared/payment/payment.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {


  signUpForm: FormGroup;
  selectedOption: string = 'no-sub'; // Default selection
  
  @ViewChild(PaymentComponent) paymentComponent: PaymentComponent;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,
    private notificationService: NotificationService
  ) {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     
    });
  }

  // Handle form submission
  onSubmit() {
    if (!this.signUpForm.valid) {
      this.notificationService.notfiyError('Please fill in the form correctly');
      return;
    }
  
    this.paymentComponent.openModel("Sign Up", 20, this.signUpForm.value.email);
  
  }

  handlePayment(resp: any) {
    const userCreationPayload = {...this.signUpForm.value, paymentReference : resp.paymentReference }; 
    this.authService.register(userCreationPayload).subscribe(resp => {
      this.notificationService.notfiySuccess('Sign Up Successful');
      this.router.navigate(['/auth/sign-in']);
    });
  }
}
