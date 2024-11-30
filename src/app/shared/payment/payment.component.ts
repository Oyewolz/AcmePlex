import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  selectedTab: string = 'card'; // Default tab
  showAddCardForm: boolean = false;
  selectedCardIndex: number | null = null;

  savedCards = [
    {
      logo: 'assets/mastercard-logo.png',
      type: 'Mastercard',
      details: 'Debit ****4320',
    },
    {
      logo: 'assets/visa-logo.png',
      type: 'Visa',
      details: 'Credit Card ****7568',
    },
  ];

  addCardForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addCardForm = this.fb.group({
      nameOnCard: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.minLength(16)]],
      expiryDate: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3)]],
      saveCard: [false],
    });
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  toggleAddCard(): void {
    this.showAddCardForm = !this.showAddCardForm;
  }

  addCard(): void {
    if (this.addCardForm.valid) {
      const newCard = {
        logo: 'assets/visa-logo.png', // Placeholder, replace with actual card type detection
        type: 'New Card',
        details: `Card ****${this.addCardForm.value.cardNumber.slice(-4)}`,
      };

      this.savedCards.push(newCard);
      this.selectedCardIndex = this.savedCards.length - 1; // Select the new card
      this.showAddCardForm = false;
      this.addCardForm.reset();
    }
  }

  selectCard(index: number): void {
    this.selectedCardIndex = index;
  }

  proceedToNextStep(): void {
    if (this.selectedCardIndex !== null) {
      console.log('Proceeding with selected card:', this.savedCards[this.selectedCardIndex]);
    } else {
      console.log('Adding a new card:', this.addCardForm.value);
    }
  }

  closeModal(): void {
    console.log('Close Modal');
  }
}
