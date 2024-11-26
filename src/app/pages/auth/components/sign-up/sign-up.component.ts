import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../shared/service/notification.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpForm: FormGroup;
  selectedOption: string = 'no-sub'; // Default selection

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,
    private notificationService: NotificationService
  ) {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['ORDINARY_USER'],
    });
  }

  // Handle option selection
  selectOption(option: string) {
    this.selectedOption = option;
    this.signUpForm.patchValue({ userType: option === 'annual' ? 'REGISTERED_USER' : 'ORDINARY_USER' });
  }

  // Handle form submission
  onSubmit() {
    if (!this.signUpForm.valid) {
      this.notificationService.notfiyError('Please fill in the form correctly');
      return;
    }

    // Add logic for sign-up or subscription processing
    if (this.selectedOption === 'annual') {
      // show modal for payment processing 
      return;
    }

    this.authService.register(this.signUpForm.value).subscribe(resp => {
      this.notificationService.notfiySuccess('Sign Up Successful');
      this.router.navigate(['/auth/sign-in']);
    });
  }
}
