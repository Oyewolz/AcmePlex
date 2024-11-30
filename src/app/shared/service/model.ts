export interface INotification{

    notfiy(message: string): void;

    notfiySuccess(message: string): void;

    notfiyError(message: string): void;
    

}

export class Card {
    id: number;
    cardType: string;
    cardNumber: string;
    cardHolderName: string;
    expiryDate: string;
    cvv: string;
    useCase: string;
  }
  