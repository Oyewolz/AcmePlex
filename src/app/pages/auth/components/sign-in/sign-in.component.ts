import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../shared/service/notification.service';
import { AuthService } from '../../service/auth.service';
import { LocalStorageService } from '../../../../shared/service/local-storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, 
    private localStorageService: LocalStorageService, private authService: AuthService,
    private notificationService: NotificationService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      this.notificationService.notfiyError('Please fill in the form correctly');
      return;
    }

    const {email, password} = this.loginForm.value;

    this.authService.login(this.loginForm.value).subscribe(resp=>{

      this.notificationService.notfiySuccess(resp.message);

      this.localStorageService.set(this.localStorageService.AUTH_TOKEN_KEY, resp.data.authenticationToken.token);

      this.localStorageService.set(this.localStorageService.USER_EMAIL_KEY, email);


      this.router.navigate(['/']);
    }

    );

  }

}
