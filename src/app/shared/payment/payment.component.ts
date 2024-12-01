import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { NotificationService } from '../service/notification.service';
import { AuthService } from '../../pages/auth/service/auth.service';
import { PaymentService } from '../../pages/ticket/service/payment.service';
import { Card } from '../service/model';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


  @Output() paymentEvent: EventEmitter<any> = new EventEmitter();

  selectedTab: string = 'card'; // Default tab
  showAddCardForm: boolean = false;
  selectedCardIndex: number = -1;
  isModalOpen: boolean = false;
  useCase: string = '';
  amount: number = 0;

  savedCards: Card[] = [];

  addCardForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder,
    private notificationService: NotificationService,
    private authService: AuthService, private paymentService: PaymentService,
     private localStorageService: LocalStorageService) { 

      
  }
  ngOnInit(): void {

    this.addCardForm = this.fb.group({
      cardHolderName: ['', [Validators.required, Validators.minLength(3)]],
      cardNumber: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(19), Validators.pattern('^[0-9]*$')]],
      expiryDate: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });

    this.retrieveSavedCards();

  }
  retrieveSavedCards() {

   
    if (!this.authService.isUserLoggedIn()) {
      return;
    }

    this.paymentService.getSavedCards()
      .subscribe(resp => {
        this.savedCards = resp.data;
      });
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  toggleAddCard(): void {
    this.showAddCardForm = !this.showAddCardForm;
  }

  addCard(): void {
    if (!this.addCardForm.valid) {
      this.notificationService.notfiyError('Please fill in the form correctly');
      return;
    }


    const newCard: Card = this.addCardForm.value;

    this.savedCards.push(newCard);
    this.selectedCardIndex = this.savedCards.length - 1; // Select the new card
    this.showAddCardForm = false;
    this.addCardForm.reset();
    
  }


  selectCard(index: number): void {
    console.log(index);
    this.selectedCardIndex = index;
  }

  proceedToNextStep(): void {
    let card: Card;
  
    if (this.selectedCardIndex != null || this.selectedCardIndex !== -1) {
      card = this.savedCards[this.selectedCardIndex];
    }

   
    if (!card && this.addCardForm.valid) {
    
      card = {
        ...this.addCardForm.getRawValue(), useCase: this.useCase, amount:  this.amount, cardType: 'CREDIT_CARD'
      };
    }


    if (!card) {
      this.notificationService.notfiyError('Please provide a valid card');
      return;
    }
    
    

    card=  {...card, amount: this.amount, useCase: this.useCase};
   if(!card.email){
      card.email = this.addCardForm.get('email').value || this.localStorageService.get(this.localStorageService.USER_EMAIL_KEY);
   }
    
    
    this.paymentService.makePayment(card)
      .subscribe(resp => {
        this.notificationService.notfiySuccess('Payment Successful');
        this.closeModal();
        this.paymentEvent.emit({ ...resp.data, useCase: this.useCase, email: card.email });

      });


  }

  closeModal(): void {
    this.isModalOpen = false;
  }
  openModel(useCase: string, amount: number, email?:string ): void {
    this.useCase = useCase;
    this.amount = amount;
    this.isModalOpen = true;

    if(email){
      this.addCardForm.get('email').setValue(email);
      this.addCardForm.get('email').disable();
    }
  }

}
// Custom validator for expiry date
export function expiryDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = /^(0[1-9]|1[0-2])\/\d{4}$/.test(control.value);
    return valid ? null : { 'expiryDateInvalid': { value: control.value } };
  };
}